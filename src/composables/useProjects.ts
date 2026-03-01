import { computed } from 'vue'
import { marked } from 'marked'
import DOMPurify from 'dompurify'
import { parseFrontmatter } from '@/utils/frontmatter'

export interface ProjectMeta {
  slug: string
  title: string
  description: string
  tags: string[]
  imageUrl: string
  repoUrl: string
  liveUrl: string
  featured: boolean
}

export interface Project extends ProjectMeta {
  html: string
}

const rawModules = import.meta.glob('../content/projects/*.md', { query: '?raw', import: 'default', eager: true }) as Record<string, string>

export function useProjects() {
  const projects = computed<ProjectMeta[]>(() => {
    return Object.entries(rawModules).map(([path, raw]) => {
      const slug = path.replace(/^.*\/(.+)\.md$/, '$1')
      const { data } = parseFrontmatter(raw)
      return {
        slug,
        title: String(data.title ?? 'Untitled'),
        description: String(data.description ?? ''),
        tags: Array.isArray(data.tags) ? (data.tags as string[]) : [],
        imageUrl: String(data.imageUrl ?? ''),
        repoUrl: String(data.repoUrl ?? ''),
        liveUrl: String(data.liveUrl ?? ''),
        featured: data.featured === true,
      }
    })
  })
  return { projects }
}

export function useProject(slug: string): Project | null {
  const entry = Object.entries(rawModules).find(([path]) => path.endsWith(`/${slug}.md`))
  if (!entry) return null
  const [, raw] = entry
  const { data, content } = parseFrontmatter(raw)
  const html = DOMPurify.sanitize(marked.parse(content, { async: false }) as string)
  return {
    slug,
    title: String(data.title ?? 'Untitled'),
    description: String(data.description ?? ''),
    tags: Array.isArray(data.tags) ? (data.tags as string[]) : [],
    imageUrl: String(data.imageUrl ?? ''),
    repoUrl: String(data.repoUrl ?? ''),
    liveUrl: String(data.liveUrl ?? ''),
    featured: data.featured === true,
    html,
  }
}
