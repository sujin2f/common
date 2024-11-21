import React, { Fragment } from 'react'
import { Link } from 'react-router-dom'

import 'src/assets/styles/common/top-bar.scss'
import { Row } from './Row'
import { Column } from './Column'

type Props = {
    left?: JSX.Element
    right?: JSX.Element
}

export const TopBar = (props: Props): JSX.Element => {
    return (
        <Fragment>
            <header className="top-bar">
                <div className="top-bar__background">
                    <div className="top-bar__half"></div>
                    <div className="top-bar__background__logo"></div>
                    <div className="top-bar__half"></div>
                </div>
                <Row>
                    <Column small={12}>
                        <div className="top-bar__foreground">
                            <div className="top-bar__half">{props.left}</div>
                            <Link
                                className="top-bar__foreground__logo"
                                to="/"
                            />
                            <div className="top-bar__half">{props.right}</div>
                        </div>
                    </Column>
                </Row>
            </header>
            <div className="top-bar__fixed-adjust" />
        </Fragment>
    )
}
