export interface Job {
    title: string;
    company: string;
    location: string;
    startDate: string;
    endDate: string;
    description: string;
}

export const JOBS: Job[] = [
    {
        title: 'Software Engineer',
        company: 'Tech Company',
        location: 'Remote',
        startDate: '2020-01-01',
        endDate: '2021-01-01',
        description: 'Developed software solutions.'
    }
];