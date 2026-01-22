export interface Experience {
  role: string;
  company: string;
  dates: string;
  type: 'project' | 'position'; // 👈 NEW
  responsibilities: string[];
  icon?: string;
}

export const experiences: Experience[] = [
  {
    role: 'Project Member',
    company: 'Center for Information Assurance, Memphis, TN',
    dates: 'March 2025 – May 2025',
    type: 'position',
    responsibilities: [
      'Supported development of a deep learning–based autonomous driving system for an R/C vehicle.',
      'Presented weekly progress updates and technical challenges to professors and project mentor.'
    ],
    icon: 'fas fa-microchip'
  },
  {
    role: 'Air Operations Co-Op II',
    company: 'FedEx Express — Air Operations',
    dates: 'June 1, 2025',
    type: 'position',
    responsibilities: [
      'Joined FedEx Air Operations as a Data & Analytics Co-Op supporting operational reliability and decision-making initiatives.'
    ],
    icon: 'fas fa-plane'
  },
  {
    role: 'Ground Time Weather Analysis',
    company: 'FedEx Express — Air Operations',
    dates: 'Fall 2025',
    type: 'project',
    responsibilities: [
      'Pulled hourly NOAA weather data via FTP/API.',
      'Engineered weather and flight datasets to analyze long-term operational impacts.',
      'Visualized trends in Power BI.'
    ],
    icon: 'fas fa-cloud-sun'
  },
  {
    role: 'AI AMM Audits',
    company: 'FedEx Express — Air Operations',
    dates: 'Summer 2025',
    type: 'project',
    responsibilities: [
      'Designed and built an AI-driven auditing tool to identify incorrect Aircraft Maintenance Manual (AMM) reference codes.',
      'Leveraged AI prompt databases with Databricks SQL and AI_GEN.',
      'Delivered results through Power BI dashboards.'
    ],
    icon: 'fas fa-robot'
  },
];
