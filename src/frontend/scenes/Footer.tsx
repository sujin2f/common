import React from 'react'
import { Column } from 'src/common/components/layout/Column'
import { Row } from 'src/common/components/layout/Row'

import 'src/frontend/scss/footer.scss'

export const Footer = () => {
    return (
        <footer>
            <Row>
                <Column small={12} medium={4}>
                    <h1>Footer Section</h1>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua. Ut enim ad minim veniam, quis nostrud
                        exercitation ullamco
                    </p>
                </Column>
                <Column small={12} medium={4}>
                    <h1>Footer Section</h1>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua. Ut enim ad minim veniam, quis nostrud
                        exercitation ullamco
                    </p>
                </Column>
                <Column small={12} medium={4}>
                    <h1>Footer Section</h1>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua. Ut enim ad minim veniam, quis nostrud
                        exercitation ullamco
                    </p>
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
