import { Project } from './projects'

export interface Experience {
    position: string
    company: string
    companyUrl?: string
    workExperience?: string
    startDate: string
    endDate?: string
    location?: string
    description?: string
    projects?: Project[]
}

export const experiences: Experience[] = [
    {
        position: '',
        company: '',
        companyUrl: '',
        workExperience: '',
        startDate: '',
        location: '',
        description: ``,
        projects: [
            {
                title: '',
                description: '',
                url: '',
                technologies: [],
            },
        ],
    },
    {
        position: '',
        company: '',
        companyUrl: '',
        workExperience: '',
        startDate: '',
        endDate: '',
        location: '',
    },
]
