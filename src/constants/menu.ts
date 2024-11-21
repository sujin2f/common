import { MenuItem } from 'src/common/types/menu'

export const menuItems: MenuItem[] = [
    {
        title: 'States',
        link: '/state/URL',
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
