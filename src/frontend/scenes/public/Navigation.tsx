import React, { Fragment } from 'react'

import { Link } from 'react-router-dom'
import { Column } from 'src/common/components/layout/Column'
import { Hamburger } from 'src/common/components/layout/Hamburger'
import { Menu } from 'src/common/components/layout/Menu'
import { Row } from 'src/common/components/layout/Row'
import { TopBar } from 'src/common/components/layout/TopBar'
import { menuItems } from 'src/constants/menu'
import { ArticleHeader } from 'src/frontend/components/ArticleHeader'

const Navigation = (): JSX.Element => {
    const topbarLeft = (
        <Fragment>
            <Hamburger menu={menuItems} className="show-for-small-only" />
            <Menu items={menuItems} className="hide-for-small-only" />
        </Fragment>
    )

    return (
        <Fragment>
            <ArticleHeader title="Navigation" description="description" />
            <Row dom="main">
                <Column dom="article" small={12} medium={8} mediumOffset={2}>
                    <h2>Hamburger Icon</h2>
                    <Hamburger menu={menuItems} />

                    <h2>Menu</h2>
                    <h3>Horizontal</h3>
                    <Menu items={menuItems} />

                    <h3>Vertical</h3>
                    <Menu items={menuItems} direction="vertical" />

                    <h2>Tob Bar</h2>
                    <TopBar left={topbarLeft} />
                </Column>
            </Row>
        </Fragment>
    )
}
export default Navigation
