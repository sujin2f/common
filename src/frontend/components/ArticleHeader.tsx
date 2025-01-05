import React from 'react'
import { Callout } from 'src/common/components/containers/Callout'
import { Column } from 'src/common/components/layout/Column'
import { Row } from 'src/common/components/layout/Row'

import 'src/frontend/scss/article-header.scss'

type Props = {
    title: string
    description?: string
}

export const ArticleHeader = (props: Props) => {
    const { title, description } = props

    return (
        <Callout className="article-header" dom="header">
            <Row>
                <Column small={12}>
                    <h1>{title}</h1>
                    {description && <p>{description}</p>}
                </Column>
            </Row>
        </Callout>
    )
}
