import { StackEntry } from './stack'

export interface Project {
    title: string
    description: string
    image?: string
    url?: string
    viewSourceUrl?: string
    technologies: Array<StackEntry['label']>
}

export interface ProjectTag {
    label: string
}

/**
 * Projects
 */
const projects: Array<Project> = [
    {
        title: 'Snake AI con Reinforcement Learning',
        description: 'Implementato il gioco Snake usando algorimtmi di Reinforcement Learning.',
        image: '/projects/snake.gif',
        viewSourceUrl: 'https://omakasui.orghttps://github.com/giuseppepaolisi/Snake_RL',
        //viewSourceUrl: 'https://github.com/Kasui92/omakasui.org.git',
        technologies: ['Python'],
    },
    {
        title: 'Sistema Gestione Centro Riparazioni',
        description:
            'Web App per la gestione di un centro assistenza di telefonia, permette ai partner associati di creare ticket riguardanti i device.',
        image: '/projects/riparalo.jpg',
        viewSourceUrl: 'https://github.com/giuseppepaolisi/riparaloApp',
        //viewSourceUrl: 'https://github.com/Kasui92/omarell',
        technologies: ['React', 'Node.js', 'Docker', 'MongoDB'],
    },
    {
        title: 'QuantuMoonLight - Piattaforma QaaS',
        description:
            'Porting di una piattaforma web completa per sperimentare algoritmi di Machine Learning quantistico su cloud, permettendo agli utenti di eseguire classiﬁcazione, regressione e preprocessing su dataset personalizzati.',
        image: '/projects/QuantuMoonLight.gif',
        //url: 'https://slicendice.vercel.app/',
        viewSourceUrl: 'https://github.com/giuseppepaolisi/QaaS-QuantuMoonLight',
        technologies: ['Python', 'Flask', 'SQLAlchemy', 'Azure', 'Docker', 'DevOps'],
    },
    {
        title: 'Linguaggio MyFan',
        description: 'Implementazione del frontend di un compilatore con analisi lessicale, sintattica e semantica.',
        image: '/projects/myfan.jpg',
        //url: 'https://.dev/',
        viewSourceUrl: 'https://gitlab.com/users/sign_in',
        technologies: ['Java'],
    },
    {
        title: 'PrimeLab',
        description: 'Modifica di un\'applicazione web per aggiungere funzionalità di rilevamento di code smell utilizzando tecniche di machine learning.',
        image: '/projects/primelab.png',
        //url: 'https://gdrcd..dev/',
        viewSourceUrl: 'https://github.com/giuseppepaolisi/PrimeLab',
        technologies: ['Java', 'Weka', 'MySQL', 'Javascript', 'CSS'],
    },
]

export default projects
