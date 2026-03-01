import { computed } from 'vue'
import { marked } from 'marked'
import DOMPurify from 'dompurify'

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

function parseFrontmatter(raw: string): { data: Record<string, unknown>; content: string } {
  const match = raw.match(/^---\r?\n([\s\S]*?)\r?\n---\r?\n?([\s\S]*)$/)
  if (!match) return { data: {}, content: raw }

  const yamlStr = match[1]
  const content = match[2]
  const data: Record<string, unknown> = {}

  for (const line of yamlStr.split('\n')) {
    const colonIdx = line.indexOf(':')
    if (colonIdx === -1) continue
    const key = line.slice(0, colonIdx).trim()
    let value: unknown = line.slice(colonIdx + 1).trim()
    if (typeof value === 'string' && value.startsWith('[') && value.endsWith(']')) {
      value = value.slice(1, -1).split(',').map((s) => s.trim().replace(/^["']|["']$/g, '')).filter(Boolean)
    } else if (typeof value === 'string') {
      value = value.replace(/^["']|["']$/g, '')
    }
    data[key] = value
  }
  return { data, content }
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
