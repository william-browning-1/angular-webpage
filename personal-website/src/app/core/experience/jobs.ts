export interface Experience {
  role: string;
  company: string;
  dates: string;
  responsibilities: string[];
  icon?: string; // optional, for your top icon
}

export const experiences: Experience[] = [
  {
    role: 'Software Engineer Co-op',
    company: 'FedEx',
    dates: 'Jan 2025 – Present',
    responsibilities: [
      'Built and supported production-level systems.',
      'Developed AI-driven tools to automate tasks.',
      'Collaborated with cross-functional teams on software improvements.',
    ],
    icon: 'fas fa-laptop-code'
  },
  {
    role: 'Web Developer Intern',
    company: 'Tech Startup',
    dates: 'Jun 2024 – Aug 2024',
    responsibilities: [
      'Created responsive web applications.',
      'Implemented user authentication and dashboards.',
      'Participated in code reviews and agile sprints.',
    ],
    icon: 'fas fa-code'
  },
  {
    role: 'Data Analyst',
    company: 'Retail Corp',
    dates: 'Jan 2024 – May 2024',
    responsibilities: [
      'Analyzed sales and inventory data.',
      'Created automated reports for management.',
      'Performed data cleansing and validation.',
    ],
    icon: 'fas fa-chart-line'
  },
  {
    role: 'Machine Learning Intern',
    company: 'AI Solutions Inc.',
    dates: 'Jun 2023 – Aug 2023',
    responsibilities: [
      'Built predictive models for customer behavior.',
      'Worked with Python and TensorFlow.',
      'Presented insights to stakeholders.',
    ],
    icon: 'fas fa-robot'
  },
  {
    role: 'Research Assistant',
    company: 'University of Memphis',
    dates: 'Sep 2022 – Dec 2023',
    responsibilities: [
      'Assisted in computer vision research projects.',
      'Implemented experiments and collected results.',
      'Prepared reports and presentations for professors.',
    ],
    icon: 'fas fa-flask'
  },
  {
    role: 'IT Support Technician',
    company: 'Campus IT Services',
    dates: 'Jan 2022 – Aug 2022',
    responsibilities: [
      'Troubleshot hardware and software issues.',
      'Managed student tech requests.',
      'Assisted in network setup and maintenance.',
    ],
    icon: 'fas fa-desktop'
  },
  {
    role: 'Frontend Developer',
    company: 'Freelance',
    dates: 'Jun 2021 – Dec 2021',
    responsibilities: [
      'Designed and implemented client websites.',
      'Worked with HTML, CSS, and JavaScript frameworks.',
      'Collaborated with clients to gather requirements.',
    ],
    icon: 'fas fa-paint-brush'
  },
  {
    role: 'Cybersecurity Intern',
    company: 'SecureTech',
    dates: 'Jun 2020 – Aug 2020',
    responsibilities: [
      'Performed security audits and vulnerability assessments.',
      'Monitored network traffic and logs.',
      'Documented security procedures and recommendations.',
    ],
    icon: 'fas fa-shield-alt'
  },
  {
    role: 'Teaching Assistant',
    company: 'University of Memphis',
    dates: 'Jan 2020 – May 2020',
    responsibilities: [
      'Assisted in CS101 labs and tutorials.',
      'Graded assignments and exams.',
      'Held office hours to support students.',
    ],
    icon: 'fas fa-chalkboard-teacher'
  },
  {
    role: 'Junior Developer',
    company: 'Local Software Firm',
    dates: 'Jun 2019 – Dec 2019',
    responsibilities: [
      'Maintained internal tools and scripts.',
      'Fixed bugs and implemented minor features.',
      'Collaborated with senior developers on projects.',
    ],
    icon: 'fas fa-code-branch'
  }
];
