import React, { Fragment, PropsWithChildren } from 'react'

import { TopBar } from 'src/frontend/scenes/TopBar'
import { Footer } from 'src/frontend/scenes/Footer'

export const Public = (props: PropsWithChildren) => {
    return (
        <Fragment>
            <TopBar />
            {props.children}
            <Footer />
        </Fragment>
    )
}
