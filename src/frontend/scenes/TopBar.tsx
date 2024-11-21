import React, { Fragment } from 'react'
import { Hamburger } from 'src/common/components/layout/Hamburger'
import { Menu } from 'src/common/components/layout/Menu'
import { TopBar as TopBarCommon } from 'src/common/components/layout/TopBar'
import { menuItems } from 'src/constants/menu'

export const TopBar = (): JSX.Element => {
    const left = (
        <Fragment>
            <Hamburger menu={menuItems} className="show-for-small-only" />
            <Menu
                items={menuItems}
                dropdown="hover"
                className="hide-for-small-only"
            />
        </Fragment>
    )
    return <TopBarCommon left={left} />
}
