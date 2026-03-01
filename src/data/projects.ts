export interface Project {
  title: string
  description: string
  tags: string[]
  imageUrl: string
  repoUrl: string
  liveUrl: string
  featured: boolean
}

export const projects: Project[] = [
  {
    title: 'OpenTrack',
    description: 'An open-source habit and goal tracker with a clean dashboard, streak counters, and weekly reports. Built with Vue 3, Pinia, and Supabase.',
    tags: ['Vue 3', 'Pinia', 'Supabase', 'TypeScript'],
    imageUrl: '',
    repoUrl: 'https://github.com/SCWPretorius/opentrack',
    liveUrl: 'https://opentrack.example.com',
    featured: true,
  },
  {
    title: 'Codebrief',
    description: 'A developer-focused newsletter aggregator that summarizes top GitHub trending repos and Hacker News threads daily via a cron-powered Node.js service.',
    tags: ['Node.js', 'Express', 'PostgreSQL', 'Cron'],
    imageUrl: '',
    repoUrl: 'https://github.com/SCWPretorius/codebrief',
    liveUrl: '',
    featured: true,
  },
  {
    title: 'Retro UI Kit',
    description: 'A Tailwind CSS component kit with a retro terminal aesthetic. Available on npm.',
    tags: ['Tailwind CSS', 'CSS', 'Design System'],
    imageUrl: '',
    repoUrl: 'https://github.com/SCWPretorius/retro-ui-kit',
    liveUrl: 'https://retroui.example.com',
    featured: true,
  },
  {
    title: 'DevCal',
    description: 'A CLI tool for syncing GitHub milestones and project deadlines to Google Calendar. Written in Python with Click.',
    tags: ['Python', 'Click', 'GitHub API', 'Google API'],
    imageUrl: '',
    repoUrl: 'https://github.com/SCWPretorius/devcal',
    liveUrl: '',
    featured: false,
  },
  {
    title: 'Typist',
    description: 'A minimalist typing speed test app in the browser. Dark mode, custom text import, and stats history stored in localStorage.',
    tags: ['Vue 3', 'TypeScript', 'LocalStorage'],
    imageUrl: '',
    repoUrl: 'https://github.com/SCWPretorius/typist',
    liveUrl: 'https://typist.example.com',
    featured: false,
  },
]
