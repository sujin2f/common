import { MenuItem } from 'src/common/types/menu'

export const menuItems: MenuItem[] = [
    {
        title: 'Intro',
        link: '/intro',
    },
    {
        title: 'States',
        link: '/state/URL_parameter',
    },
    {
        title: 'Elements',
        link: '/typography',
        children: [
            {
                title: 'Typography',
                link: '/typography',
            },
            {
                title: 'Form',
                link: '/form',
            },
        ],
    },
]
