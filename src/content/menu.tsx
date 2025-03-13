export interface ICommonMenu {
    title: string;
    url: string;
}

export interface iMenu extends ICommonMenu {
    submenu: ICommonMenu[];
};

export const menu = [
    {
        title: 'Research',
        url: '/research',
        submenu: [
            {
                title: 'Maxwell’s demon and stochastic thermodynamics',
                url: '/research/maxwell-demon-and-stochastic-thermodynamics',
            },
            {
                title: 'Electronic cooling',
                url: '/research/electronic-cooling',
            },
            {
                title: 'Electronic refrigeration',
                url: '/research/electronic-refrigeration',
            },
            {
                title: 'Quantum heat engine',
                url: '/research/quantum-heat-engine',
            },
            {
                title: 'Single-electron turnstile',
                url: '/research/single-electron-turnstile',
            },
            {
                title: 'Temperature and thermometry',
                url: '/research/temperature-and-thermometry',
            },
        ],
    },
    {
        title: 'Team',
        url: '/team',
        submenu: [
            {
                title: 'Senior Researchers',
                url: '/team/senior-researchers',
            },
            {
                title: 'Postdoctoral Researchers',
                url: '/team/postdoctoral-researchers',
            },
            {
                title: 'Ph.D. Students',
                url: '/team/phd-students',
            },
            {
                title: 'Former group members',
                url: '/team/former-group-members',
            },
        ],
    },
    {
        title: 'Collaboration',
        url: '/collaboration',
        submenu: [],
    },
    {
        title: 'Publications',
        url: '/publications',
        submenu: [
            {
                title: 'Peer-reviewed works',
                url: '/publications/peer-reviewed-works',
            },
            {
                title: 'PhD Theses',
                url: '/publications/phd-theses',
            },
        ],
    },
    {
        title: 'News & PR',
        url: '/news-press',
        submenu: [
            {
                title: 'News',
                url: '/news-press/news',
            },
            {
                title: 'Press releases',
                url: '/news-press/press',
            },
        ],
    },
];
