import React, { Fragment } from 'react'

import { Row } from 'src/common/components/layout/Row'
import { Column } from 'src/common/components/layout/Column'
import { ArticleHeader } from 'src/frontend/components/ArticleHeader'
import { Card } from 'src/common/components/containers/Card'

const Grid = (): JSX.Element => {
    return (
        <Fragment>
            <ArticleHeader title="Grid" description="description" />
            <main>
                <Row>
                    <Column small={12}>
                        <h2>Grid System</h2>
                        <p>Use Row and Column components.</p>
                    </Column>
                </Row>
                <Row>
                    <Column small={12}>12</Column>
                </Row>
                <Row>
                    <Column small={1}>1</Column>
                    <Column small={1}>1</Column>
                    <Column small={1}>1</Column>
                    <Column small={1}>1</Column>
                    <Column small={1}>1</Column>
                    <Column small={1}>1</Column>
                    <Column small={1}>1</Column>
                    <Column small={1}>1</Column>
                    <Column small={1}>1</Column>
                    <Column small={1}>1</Column>
                    <Column small={1}>1</Column>
                    <Column small={1}>1</Column>
                </Row>
                <Row>
                    <Column small={2}>2</Column>
                    <Column small={2}>2</Column>
                    <Column small={2}>2</Column>
                    <Column small={2}>2</Column>
                    <Column small={2}>2</Column>
                    <Column small={2}>2</Column>
                </Row>
                <Row>
                    <Column small={3}>3</Column>
                    <Column small={3}>3</Column>
                    <Column small={3}>3</Column>
                    <Column small={3}>3</Column>
                </Row>
                <Row>
                    <Column small={4}>4</Column>
                    <Column small={4}>4</Column>
                    <Column small={4}>4</Column>
                </Row>
                <Row>
                    <Column small={6}>6</Column>
                    <Column small={6}>6</Column>
                </Row>

                <Row>
                    <Column small={12}>
                        <h2>Card System</h2>
                        <p>Use Row and Column components.</p>
                    </Column>
                </Row>
                <Row>
                    <Column small={4}>
                        <Card
                            title="example content"
                            to="#"
                            time={Date.now()}
                            image="https://sujinc.com/wp-content/uploads/2015/02/Eye-Covering-Cat.jpg"
                            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
                        />
                    </Column>
                    <Column small={4}>
                        <Card
                            title="example content"
                            to="#"
                            time={Date.now()}
                            image="https://sujinc.com/wp-content/uploads/2015/02/Eye-Covering-Cat.jpg"
                            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
                        />
                    </Column>
                    <Column small={4}>
                        <Card
                            title="example content"
                            to="#"
                            time={Date.now()}
                            image="https://sujinc.com/wp-content/uploads/2015/02/Eye-Covering-Cat.jpg"
                            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
                        />
                    </Column>
                    <Column small={4}>
                        <Card
                            title="example content"
                            to="#"
                            time={Date.now()}
                            image="https://sujinc.com/wp-content/uploads/2015/02/Eye-Covering-Cat.jpg"
                            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
                        >
                            Additional Element
                        </Card>
                    </Column>
                    <Column small={4}>
                        <Card
                            title="example content"
                            to="#"
                            time={Date.now()}
                            image="https://sujinc.com/wp-content/uploads/2015/02/Eye-Covering-Cat.jpg"
                            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
                        >
                            Additional Element
                        </Card>
                    </Column>
                    <Column small={4}>
                        <Card
                            title="example content"
                            to="#"
                            time={Date.now()}
                            image="https://sujinc.com/wp-content/uploads/2015/02/Eye-Covering-Cat.jpg"
                            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
                        >
                            Additional Element
                        </Card>
                    </Column>
                </Row>
            </main>
        </Fragment>
    )
}
export default Grid
