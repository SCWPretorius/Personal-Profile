export interface SkillCategory {
  category: string
  items: string[]
}

export const skills: SkillCategory[] = [
  {
    category: 'Languages & Runtimes',
    items: ['Go', '.NET / C#', 'Python', 'Java', 'TypeScript', 'JavaScript', 'SQL'],
  },
  {
    category: 'Cloud & Infrastructure',
    items: ['Microsoft Azure', 'Azure Service Bus', 'Azure Functions', 'Docker', 'CI/CD', 'GitHub Actions', 'Microservices', 'Event-Driven Architecture'],
  },
  {
    category: 'AI & Automation',
    items: ['LLM Integration', 'AI-Assisted Development', 'Agentic Workflows', 'Prompt Engineering', 'Intelligent Automation', 'Data Pipelines'],
  },
  {
    category: 'Architecture & Leadership',
    items: ['Distributed Systems', 'System Design', 'Technical Leadership', 'Engineering Mentorship', 'Code Review', 'Backend Architecture', 'API Design', 'REST', 'gRPC / Protocol Buffers'],
  },
  {
    category: 'Data & Backend',
    items: ['PostgreSQL', 'SQL Server', 'MongoDB', 'Redis', 'GraphQL', 'REST APIs', 'Spring Boot'],
  },
]
