import { BiLogoGraphql, BiLogoMongodb, BiLogoReact, BiLogoVuejs } from 'react-icons/bi';
import Redview from '@/public/projects/redview1.png';
import Dominoone from '@/public/projects/dominoone1.png';
import { StaticImageData } from 'next/image';

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
    image: StaticImageData;
}
export const projects: IProjects[] = [
    {
        title: 'Redview',
        description: 'LEGALTECH FOR THE BUSINESS OF LAW',
        url: 'https://www.redraincorp.com/',
        image: Redview
    },
    {
        title: 'Dominoone',
        description: 'DominoOne was designed to remove the gap between leadership and employees',
        url: 'https://www.redraincorp.com/',
        image: Dominoone
    },
]