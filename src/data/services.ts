export interface Service {
  title: string
  description: string
  icon: string
}

export const services: Service[] = [
  { title: 'Web Development', description: 'Full-stack web applications built with modern frameworks. From MVP to production-ready, I handle architecture, implementation, and deployment.', icon: 'Code2' },
  { title: 'Frontend Engineering', description: 'Pixel-perfect UI implementation, component libraries, and performance optimization. I turn designs into fast, accessible, and maintainable code.', icon: 'Layout' },
  { title: 'Technical Consulting', description: 'Code reviews, architecture audits, and technology strategy. Get an outside perspective on your codebase and roadmap.', icon: 'Lightbulb' },
  { title: 'API & Backend', description: 'RESTful and GraphQL APIs, database design, and server-side logic. Built for reliability and scale.', icon: 'Server' },
]
