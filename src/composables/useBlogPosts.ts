import { computed } from 'vue'
import { marked } from 'marked'
import DOMPurify from 'dompurify'
import { parseFrontmatter } from '@/utils/frontmatter'

export interface PostMeta {
  title: string
  date: string
  excerpt: string
  tags: string[]
  coverImage: string
  slug: string
}

export interface Post extends PostMeta {
  html: string
}

const rawModules = import.meta.glob('../content/blog/*.md', { query: '?raw', import: 'default', eager: true }) as Record<string, string>

export function useBlogPosts() {
  const posts = computed<PostMeta[]>(() => {
    return Object.entries(rawModules)
      .map(([path, raw]) => {
        const slug = path.replace(/^.*\/(.+)\.md$/, '$1')
        const { data } = parseFrontmatter(raw)
        return {
          slug,
          title: String(data.title ?? 'Untitled'),
          date: String(data.date ?? ''),
          excerpt: String(data.excerpt ?? ''),
          tags: Array.isArray(data.tags) ? (data.tags as string[]) : [],
          coverImage: String(data.coverImage ?? ''),
        }
      })
      .sort((a, b) => (a.date < b.date ? 1 : -1))
  })
  return { posts }
}

export function usePost(slug: string): Post | null {
  const entry = Object.entries(rawModules).find(([path]) => path.endsWith(`/${slug}.md`))
  if (!entry) return null
  const [, raw] = entry
  const { data, content } = parseFrontmatter(raw)
  const html = DOMPurify.sanitize(marked.parse(content, { async: false }) as string)
  return {
    slug,
    title: String(data.title ?? 'Untitled'),
    date: String(data.date ?? ''),
    excerpt: String(data.excerpt ?? ''),
    tags: Array.isArray(data.tags) ? (data.tags as string[]) : [],
    coverImage: String(data.coverImage ?? ''),
    html,
  }
}
