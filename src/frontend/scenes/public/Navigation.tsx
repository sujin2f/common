import React, { Fragment } from 'react'

import { Input } from 'src/common/components/forms/Input'
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
            <h1 className="hide-for-small-only">Logo</h1>
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
                    <TopBar
                        left={topbarLeft}
                        right={<Input type="search" placeholder="Search" />}
                        fullWidth={true}
                    />
                </Column>
            </Row>
        </Fragment>
    )
}
export default Navigation
