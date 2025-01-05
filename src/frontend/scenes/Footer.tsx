import React from 'react'
import { Column } from 'src/common/components/layout/Column'
import { Row } from 'src/common/components/layout/Row'

import 'src/frontend/scss/footer.scss'
import { sampleText } from 'src/frontend/constants'

export const Footer = () => {
    return (
        <footer>
            <Row>
                <Column small={12} medium={4}>
                    <h1>Footer Section</h1>
                    <p>{sampleText}</p>
                </Column>
                <Column small={12} medium={4}>
                    <h1>Footer Section</h1>
                    <p>{sampleText}</p>
                </Column>
                <Column small={12} medium={4}>
                    <h1>Footer Section</h1>
                    <p>{sampleText}</p>
                </Column>
            </Row>
            <Row>
                <Column>
                    Made with React, Node, GraphQL, and MongoDB 2024-
                </Column>
            </Row>
        </footer>
    )
}
