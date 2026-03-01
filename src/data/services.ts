export interface Service {
  title: string
  description: string
  icon: string
}

export const services: Service[] = [
  {
    title: 'Backend Architecture',
    description: 'Designing and building scalable, distributed backend systems. From event-driven microservices to cloud-native platforms on Azure — pragmatic architecture that ships and scales.',
    icon: 'Server',
  },
  {
    title: 'AI Integration & Automation',
    description: 'Integrating LLMs and intelligent automation into real products. From agentic workflows to AI-assisted developer tooling — turning AI capabilities into measurable productivity gains.',
    icon: 'Cpu',
  },
  {
    title: 'Technical Leadership & Mentoring',
    description: 'Leading engineering teams, driving technical direction, and growing developers. Code reviews, architectural design sessions, and the hands-on mentorship that builds strong teams.',
    icon: 'Users',
  },
  {
    title: 'Cloud & Platform Engineering',
    description: 'Cloud-native development on Microsoft Azure — service design, CI/CD pipelines, infrastructure hardening, and platform reliability. Built for production from day one.',
    icon: 'Cloud',
  },
]
