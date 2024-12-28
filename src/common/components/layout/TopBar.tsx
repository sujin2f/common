import React from 'react'

import { Row } from './Row'
import { Column } from './Column'
import { className } from 'src/common/utils/string'

import 'src/common/scss/top-bar.scss'

type Props = {
    left?: JSX.Element
    right?: JSX.Element
    className?: string
}

export const TopBar = (props: Props): JSX.Element => {
    return (
        <Row className={className('top-bar', props.className)} dom="header">
            <Column small={12}>
                <div className="top-bar__foreground">
                    <div className="top-bar__left">{props.left}</div>
                    <div className="top-bar__rght">{props.right}</div>
                </div>
            </Column>
        </Row>
    )
}
