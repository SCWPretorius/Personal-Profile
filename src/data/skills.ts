export interface SkillCategory {
  category: string
  items: string[]
}

export const skills: SkillCategory[] = [
  { category: 'Frontend', items: ['Vue 3', 'React', 'TypeScript', 'JavaScript', 'HTML5', 'CSS3', 'Tailwind CSS', 'Vite'] },
  { category: 'Backend', items: ['Node.js', 'Express', 'Python', 'FastAPI', 'REST APIs', 'GraphQL', 'PostgreSQL', 'MongoDB'] },
  { category: 'DevOps & Tools', items: ['Git', 'Docker', 'CI/CD', 'Linux', 'Nginx', 'GitHub Actions', 'Vercel', 'AWS'] },
  { category: 'Design & UX', items: ['Figma', 'Accessible Design', 'Responsive Design', 'Design Systems'] },
]
