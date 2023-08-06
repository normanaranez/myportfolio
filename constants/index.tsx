import { BiLogoGraphql, BiLogoMongodb, BiLogoReact, BiLogoVuejs } from 'react-icons/bi';

export interface IMainMenu {
    label: string;
    icon: React.ReactNode;
    route: string;
}

// 'Home', 'About', 'Projects', 'Contacts',

export const menus: IMainMenu[] = [
    {
        label: 'Home',
        icon: <BiLogoGraphql />,
        route: '/'
    },
    {
        label: 'About',
        icon: <BiLogoGraphql />,
        route: '/#about'
    },
    {
        label: 'Projects',
        icon: <BiLogoGraphql />,
        route: '/#projects'
    },
    {
        label: 'Contacts',
        icon: <BiLogoGraphql />,
        route: '/#contacts'
    }
];

export interface IProjects {
    title: string;
    description: string;
    github?: string;
    url?: string;
}
export const projects: IProjects[] = [
    {
        title: 'Redview',
        description: 'LEGALTECH FOR THE BUSINESS OF LAW',
        url: 'https://www.redraincorp.com/'
    },
    {
        title: 'Dominoone',
        description: 'DominoOne was designed to remove the gap between leadership and employees',
        url: 'https://www.redraincorp.com/'
    },
    {
        title: 'Redview',
        description: 'LEGALTECH FOR THE BUSINESS OF LAW',
        url: 'https://www.redraincorp.com/'
    },
    {
        title: 'Redview',
        description: 'LEGALTECH FOR THE BUSINESS OF LAW',
        url: 'https://www.redraincorp.com/'
    }
]