import { IconBrandGithub, IconBrandGitlab, IconBrandLinkedin, TablerIcon } from '@tabler/icons-react'

export interface SocialEntry {
    label: string
    url: string
    icon: TablerIcon
}

/**
 * Social links
 */
export const socials: Record<string, SocialEntry> = {
    github: {
        label: 'Github',
        url: 'https://github.com/giuseppepaolisi',
        icon: IconBrandGithub,
    },
    gitlab: {
        label: 'Gitlab',
        url: 'https://gitlab.com/giuseppe.paolisi',
        icon: IconBrandGitlab,
    },
    linkedin: {
        label: 'Linkedin',
        url: 'https://www.linkedin.com/in/giuseppe-paolisi-5b9313125/',
        icon: IconBrandLinkedin,
    },
    /*bluesky: {
        label: 'Bluesky',
        url: 'https://bsky.app/profile/giuseppepaolisi.dev',
        icon: IconBrandBluesky,
    },*/
}
