import React, { Fragment, PropsWithChildren } from 'react'
import { TopBar } from '../TopBar'

export const Public = (props: PropsWithChildren): JSX.Element => {
    return (
        <Fragment>
            <TopBar />
            {props.children}
            <footer>Footer</footer>
        </Fragment>
    )
}
