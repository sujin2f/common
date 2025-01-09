import React from 'react'

import { Row } from 'src/common/components/layout/Row'
import { Column } from 'src/common/components/layout/Column'
import { ArticleHeader } from 'src/frontend/components/ArticleHeader'

import { Code } from 'src/common/components/containers/Code'

const Intro = () => {
    const installation = `git clone https://github.com/sujin2f/common.git <your-project-directory>
cd <your-project-directory>
yarn install`

    return (
        <main>
            <ArticleHeader
                title="Intro"
                description="The bootstrap that makes React + Node + MongoDB project."
            />
            <Row dom="article">
                <Column small={12}>
                    <h2>Installation</h2>
                    <Code lang="bash">{installation}</Code>
                </Column>
            </Row>
        </main>
    )
}
export default Intro
