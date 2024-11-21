import React from 'react'
import { Callout } from 'src/common/components/containers/Callout'
import { Column } from 'src/common/components/layout/Column'
import { Row } from 'src/common/components/layout/Row'

require('src/assets/styles/components/article-header.scss')

type Props = {
    title: string
    description?: string
}

/*
 * Callout Component in Foundation Site
 * @ref https://get.foundation/sites/docs/callout.html
 */
export const ArticleHeader = (props: Props): JSX.Element => {
    const { title, description } = props

    return (
        <Callout className="article-header">
            <Row>
                <Column small={12} medium={8} mediumOffset={2}>
                    <h1>{title}</h1>
                    {description && <p>{description}</p>}
                </Column>
            </Row>
        </Callout>
    )
}
