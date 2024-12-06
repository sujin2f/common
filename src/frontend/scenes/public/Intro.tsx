import React, { Fragment } from 'react'

import { Row } from 'src/common/components/layout/Row'
import { Column } from 'src/common/components/layout/Column'
import { ArticleHeader } from 'src/frontend/components/ArticleHeader'

const Intro = (): JSX.Element => {
    return (
        <Fragment>
            <ArticleHeader
                title="Intro"
                description="The bootstrap that makes React + Node + MongoDB project."
            />
            <Row dom="main">
                <Column dom="article" small={12} medium={8} mediumOffset={2}>
                    <h2>Installation</h2>
                    <code className="code-block">{`# git clone https://github.com/sujin2f/common.git <your-project-directory>
# cd <your-project-directory>
# yarn install`}</code>
                </Column>
            </Row>
        </Fragment>
    )
}
export default Intro
