import React, { useRef, RefObject, useCallback, useMemo } from 'react'
import { Link } from 'react-router-dom'

import { MenuItem as TypeMenuItem } from 'src/common/types/menu'
import { className, generateUUID } from 'src/common/utils/string'

require('src/assets/styles/common/menu.scss')

type ComponentProps = {
    className?: string
    dropdown?: 'hover' | 'click'
    items: TypeMenuItem[]
    reference?: RefObject<HTMLUListElement>
}

type BlockProps = {
    dropdown?: 'hover' | 'click'
    items: TypeMenuItem[]
    reference?: RefObject<HTMLUListElement>
}

type ItemProps = {
    item: TypeMenuItem
    dropdown?: 'hover' | 'click'
}

const MenuItem = (props: ItemProps): JSX.Element => {
    const children = useRef<HTMLUListElement>(null)

    const onMouseOver = useCallback(() => {
        if (props.dropdown === 'hover') {
            children.current?.classList.add('dropdown--show')
        }
    }, [props.dropdown])

    const onMouseLeave = useCallback(() => {
        if (props.dropdown === 'hover') {
            children.current?.classList.remove('dropdown--show')
        }
    }, [props.dropdown])

    const onClick = useCallback(() => {
        if (props.dropdown === 'click') {
            if (children.current?.classList.contains('dropdown--show')) {
                children.current?.classList.remove('dropdown--show')
            } else {
                children.current?.classList.add('dropdown--show')
            }
        }
    }, [props.dropdown])

    const linkTo = useMemo(() => {
        if (props.dropdown === 'click') {
            return ''
        }
        return props.item.link
    }, [props.dropdown, props.item.link])

    return (
        <li
            key={`menu-${props.item.title}-${generateUUID()}`}
            onMouseOver={onMouseOver}
            onMouseLeave={onMouseLeave}
            onClick={onClick}
        >
            <Link to={linkTo}>{props.item.title}</Link>

            {props.item.children && (
                <MenuBlock items={props.item.children} reference={children} />
            )}
        </li>
    )
}

const MenuBlock = (props: BlockProps): JSX.Element => {
    return (
        <ul
            className={className('menu', props.dropdown && 'dropdown')}
            ref={props.reference}
        >
            {props.items.map((menu) => (
                <MenuItem
                    key={`menu-${menu.title}-${generateUUID()}`}
                    item={menu}
                    dropdown={props.dropdown}
                />
            ))}
        </ul>
    )
}

export const Menu = (props: ComponentProps): JSX.Element => {
    return (
        <nav className={props.className}>
            <MenuBlock dropdown={props.dropdown} items={props.items} />
        </nav>
    )
}
