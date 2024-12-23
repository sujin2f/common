import React, { useCallback, useMemo } from 'react'
import { filterEmpty } from 'src/common/utils/object'
import { className as getClassName } from 'src/common/utils/string'
import { MouseEventCallback } from 'src/common/types/react'
import { Icon } from 'src/common/components/containers/Icon'
import { useNavigate } from 'react-router-dom'

require('src/common/scss/button.scss')

type Props = {
    title?: string | number
    className?: string
    onClick?: MouseEventCallback
    autoFocus?: boolean
    icon?: string
    type?: 'button' | 'submit' | 'reset' | 'file'
    id?: string
    color?: 'primary' | 'secondary' | 'success' | 'alert' | 'warning'
    hollow?: boolean
    to?: string
}

/*
 * Button Component in Foundation Site
 * @ref https://get.foundation/sites/docs/button.html
 */
export const Button = (props: Props): JSX.Element => {
    const { autoFocus, icon, type, id } = props
    const navigate = useNavigate()

    const className = useMemo(() => {
        const color = props.color || 'primary'
        return getClassName(
            'button',
            props.className,
            color,
            props.hollow && 'hollow',
        )
    }, [props.className, props.color, props.hollow])

    const title = useMemo(() => props.title, [props.title])

    const onClick = useCallback(
        (e: React.MouseEvent) => {
            if (props.onClick) {
                props.onClick(e)
                e.preventDefault()
                return
            }

            if (props.to) {
                navigate(props.to)
            }
        },
        [navigate, props],
    )

    const buttonProps = useMemo(() => {
        return filterEmpty({
            className,
            onClick,
            autoFocus,
            'aria-label': title,
            type: type ? type : 'button',
            id,
        })
    }, [autoFocus, className, onClick, title, type, id])

    return (
        <button {...buttonProps}>
            {icon && <Icon icon={icon}></Icon>}
            {title && title}
        </button>
    )
}
