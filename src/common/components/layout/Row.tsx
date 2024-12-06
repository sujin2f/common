import { PropsWithChildren, createElement } from 'react'
import { className } from 'src/common/utils/string'

type Props = {
    className?: string
    dom?: string
    expanded?: boolean
}

/*
 * Grid Layout Component in Foundation Site
 * @ref https://get.foundation/sites/docs/flex-grid.html
 */
export const Row = (props: PropsWithChildren<Props>): JSX.Element => {
    const type = props.dom || 'div'

    return createElement(
        type,
        {
            className: className(
                'row',
                props.className,
                props.expanded && 'expanded',
            ),
        },
        props.children,
    )
}
