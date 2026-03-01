export interface Education {
  institution: string
  degree: string
  period: string
  description: string
}

export const education: Education[] = [
  {
    institution: 'North-West University / Noordwes-Universiteit',
    degree: 'Honours Degree B.Sc. — Computer Science and Information Systems',
    period: '2017',
    description:
      'Fields of study: Information Systems Engineering, Computer Security, Decision Support Systems, and Artificial Intelligence.',
  },
  {
    institution: 'North-West University / Noordwes-Universiteit',
    degree: 'Bachelor of Science (B.Sc.) — Information Technology',
    period: '2014 — 2016',
    description:
      'Major subjects included: Expert Systems, Artificial Intelligence, Computer Networks, Databases, Data Structures and Algorithms, Operating Systems, Programming (Java), System Analysis and Design, and User Interface Programming (C#, SQL, ASP.NET).',
  },
  {
    institution: 'Hoërskool Montana',
    degree: 'National Senior Certificate (Matric)',
    period: '2009 — 2013',
    description: 'National Senior Certification.',
  },
]

export const certifications = [
  'Docker — DevOps',
  'Microsoft Certified: Azure Fundamentals',
  'Complete Guide to Protocol Buffers 3 [Java, Golang, Python]',
]
