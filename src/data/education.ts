export interface Education {
  institution: string
  degree: string
  period: string
  description: string
}

export const education: Education[] = [
  {
    institution: 'University of Cape Town',
    degree: 'BSc Computer Science',
    period: '2014 — 2018',
    description: 'Majored in Computer Science with a focus on software engineering and algorithms. Final-year project: a distributed task scheduler built in Go.',
  },
  {
    institution: 'freeCodeCamp / Self-Study',
    degree: 'Full-Stack Web Development',
    period: '2017 — 2018',
    description: 'Completed over 1,200 hours of practical web development training. Earned certifications in Responsive Web Design, JavaScript Algorithms, and APIs.',
  },
]
