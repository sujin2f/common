import React, { Fragment } from 'react'
import { Link } from 'react-router-dom'

import { Hamburger } from 'src/common/components/layout/Hamburger'
import { Menu } from 'src/common/components/layout/Menu'
import { TopBar as TopBarCommon } from 'src/common/components/layout/TopBar'
import { menuItems } from 'src/constants/menu'

require('src/frontend/scss/top-bar.scss')

export const TopBar = (): JSX.Element => {
    const left = (
        <Fragment>
            <Hamburger menu={menuItems} className="show-for-small-only" />
            <h1 className="hide-for-small-only">
                <Link to="/">BoilerPlate</Link>
            </h1>
            <Menu
                items={menuItems}
                dropdown="hover"
                className="hide-for-small-only"
            />
        </Fragment>
    )
    return <TopBarCommon left={left} />
}
