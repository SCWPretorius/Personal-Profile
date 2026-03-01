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
    company: 'Investec',
    role: 'Technical Team Lead',
    period: 'December 2025 — Present',
    description:
      'Promoted into a people leadership role with direct engineering reports, while retaining architectural ownership. Leading a team of engineers with mentorship, career development, and performance guidance. Owning technical direction and architectural decisions across backend systems. Driving delivery execution while maintaining engineering quality standards. Introducing AI-assisted workflows and automation to improve development velocity.',
    tags: ['Technical Leadership', 'System Architecture', 'AI Workflows', 'Mentorship', 'Azure'],
    current: true,
  },
  {
    company: 'Investec',
    role: 'Technical Lead',
    period: 'January 2025 — December 2025',
    description:
      'Brought in to provide senior technical leadership and architectural guidance across client onboarding systems. Designed and reviewed system architecture for scalable cloud-native services. Provided technical oversight across on-prem and Azure systems. Led complex feature delivery across cross-functional teams and conducted code reviews to improve CI/CD standards.',
    tags: ['Cloud-Native', 'Azure', 'CI/CD', 'Architecture', 'Code Review'],
  },
  {
    company: 'Happy Peak Studios',
    role: 'Founder',
    period: 'August 2025 — Present',
    description:
      'Building AI-assisted development tooling and experimenting with LLM integrations for workflow automation. Designing intelligent backend systems and exploring AI-enhanced data analytics pipelines.',
    tags: ['AI', 'LLMs', 'Automation', 'Backend', 'Data Pipelines'],
    current: true,
  },
  {
    company: 'Open Vantage',
    role: 'Senior Software Engineer',
    period: 'September 2022 — November 2024',
    description:
      'Contributed to the Vumacam SafeCity platform — a large-scale security system integrating live alerts, video feeds, and operational control systems. Designed and implemented Azure-based microservices, served as technical advisor for data analytics initiatives, improved CI/CD pipelines, and conducted in-depth architectural guidance.',
    tags: ['Azure', 'Microservices', 'CI/CD', 'Data Analytics', 'Security'],
  },
  {
    company: 'Luno',
    role: 'Software Engineer',
    period: 'December 2021 — August 2022',
    description:
      'Worked within the user experience and backend domain, contributing to globally distributed cryptocurrency products operating in regulated markets. Built and maintained backend services supporting cryptocurrency launches across multiple regions, collaborated closely with frontend engineers, and contributed to technical design documents.',
    tags: ['Go', 'Distributed Systems', 'Fintech', 'Backend', 'Regulated Markets'],
  },
  {
    company: 'Dimension Data',
    role: 'Senior Software Engineer / Technical Lead',
    period: 'March 2020 — December 2021',
    description:
      'Designed architecture for enterprise-scale platforms. Led development of the COVID-19 office capacity management portal across multiple countries. Built global office planning systems. Reduced bonus processing time from months to minutes. Led platform migration to Spring-based microservices and implemented centralized authentication supporting multiple social logins.',
    tags: ['.NET', 'Spring Boot', 'Microservices', 'Azure', 'Authentication'],
  },
  {
    company: 'Dimension Data',
    role: 'Senior Software Engineer',
    period: 'March 2019 — February 2020',
    description:
      'Mentored and trained graduate developers while driving the RPA platform migration to the Spring framework, reducing external web server dependencies and deployment time. Implemented a new authentication server enabling multiple social logins. Conducted penetration testing sessions and worked on enterprise integrations.',
    tags: ['Spring Boot', 'RPA', 'Java', 'Security', 'Mentorship'],
  },
  {
    company: 'Dimension Data',
    role: 'Software Developer',
    period: 'June 2018 — February 2019',
    description:
      'Took a lead role on internal projects within a small team under guidance from a Senior Solution Architect. Developed an Agri-IoT solution for Royal Eswatini Sugar Corporation, streamlining sugarcane processes and conducting simulations for accurate predictions. Contributed to core development of an in-house Robotic Process Automation (RPA) solution, integrating diverse systems and technologies.',
    tags: ['Java', 'IoT', 'RPA', 'System Integration'],
  },
  {
    company: 'Dimension Data',
    role: 'Graduate Intern Consultant',
    period: 'February 2018 — June 2018',
    description:
      'Joined as a Graduate Consultant at Britehouse (a Dimension Data company). Researched and implemented technologies to enhance existing projects, focusing on making solutions more generic and modular. Reduced implementation time by decomposing systems into web services and microservices.',
    tags: ['Java', 'Microservices', 'Web Services', 'Consulting'],
  },
  {
    company: 'Digiata',
    role: 'Junior System Analyst',
    period: 'December 2017 — February 2018',
    description:
      'Performed support work on SQL databases at client sites. Used in-house developed tools to create automated procedures and rules for managing data migrations, data transactions, and generating dynamic reports.',
    tags: ['SQL', 'Data Migration', 'Reporting', 'Automation'],
  },
]
