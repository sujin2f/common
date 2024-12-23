import { PropsWithChildren, createElement } from 'react'
import { className } from 'src/common/utils/string'

type Props = {
    className?: string
    dom?: string
}

export const Row = (props: PropsWithChildren<Props>): JSX.Element => {
    const type = props.dom || 'div'

    return createElement(
        type,
        {
            className: className('row', props.className),
        },
        props.children,
    )
}
