export interface Experience {
  company: string
  role: string
  period: string
  description: string
  tags: string[]
  current?: boolean
}

export const experience: Experience[] = [
  {
    company: 'Acme Corp',
    role: 'Senior Frontend Developer',
    period: '2022 — Present',
    description: 'Lead frontend development for a SaaS platform serving 50k+ users. Architected the migration from legacy jQuery to Vue 3, reducing bundle size by 40%. Mentored 3 junior developers and established code review standards.',
    tags: ['Vue 3', 'TypeScript', 'Tailwind', 'GraphQL'],
    current: true,
  },
  {
    company: 'Digital Agency XYZ',
    role: 'Full-Stack Developer',
    period: '2020 — 2022',
    description: 'Delivered 12+ client projects across fintech, e-commerce, and media verticals. Built REST APIs with Node.js/Express and interactive frontends with React and Vue.',
    tags: ['Vue', 'React', 'Node.js', 'PostgreSQL'],
  },
  {
    company: 'StartupCo',
    role: 'Junior Developer',
    period: '2018 — 2020',
    description: 'Contributed to a bootstrapped startup building internal tooling. Owned the mobile-responsive redesign that improved conversion rate by 23%.',
    tags: ['JavaScript', 'CSS', 'PHP', 'MySQL'],
  },
]
