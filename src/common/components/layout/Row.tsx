import { JSX, PropsWithChildren, createElement } from 'react'
import { className } from 'src/common/utils/string'

import 'src/common/scss/layout.scss'

type Props = {
    className?: string
    dom?: string | JSX.ElementType
    fullWidth?: boolean
}

export const Row = (props: PropsWithChildren<Props>) => {
    const { className: cls, dom, fullWidth } = props
    const type = dom || 'div'

    return createElement(
        type,
        {
            className: className('row', cls, fullWidth && 'row--full-width'),
        },
        props.children,
    )
}
