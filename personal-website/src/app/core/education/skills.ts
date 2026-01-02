export interface Skill {
  name: string;
  icon: string;
}

export const SKILLS: Skill[] = [
  { name: 'Python', icon: 'devicon-python-plain' },
  { name: 'SQL', icon: 'devicon-postgresql-plain' },
  { name: 'Spark', icon: 'devicon-apache-plain' },
  { name: 'Databricks', icon: 'fa-solid fa-layer-group' },
  { name: 'Power BI', icon: 'fa-solid fa-chart-column' },
  { name: 'Power Apps', icon: 'fa-solid fa-bolt' },

  { name: 'Angular', icon: 'devicon-angular-plain' },
  { name: 'Azure', icon: 'devicon-azure-plain' },
  { name: 'Rails', icon: 'devicon-rails-plain' },
  { name: 'Ruby', icon: 'devicon-ruby-plain' },
  { name: 'JavaScript', icon: 'devicon-javascript-plain' },

  { name: 'CSS', icon: 'devicon-css3-plain' },
  { name: 'HTML', icon: 'devicon-html5-plain' },

  { name: 'Teams', icon: 'fa-brands fa-microsoft' },
  { name: 'Outlook', icon: 'fa-solid fa-envelope' },
  { name: 'Word', icon: 'fa-solid fa-file-word' },
  { name: 'PowerPoint', icon: 'fa-solid fa-file-powerpoint' },
  { name: 'Excel', icon: 'fa-solid fa-file-excel' },

  { name: 'DAX', icon: 'fa-solid fa-calculator' },
  { name: 'Power Query', icon: 'fa-solid fa-filter' },
  { name: 'UNIX / CLI', icon: 'fa-solid fa-terminal' },
];
