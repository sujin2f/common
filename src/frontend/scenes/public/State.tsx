import React, { Fragment } from 'react'

import { useStore } from 'src/frontend/hooks/useStore'
import { useGraphQL } from 'src/frontend/hooks/useGraphQL'
import { useURL } from 'src/frontend/hooks/useURL'
import { setDummy } from 'src/frontend/store/actions'
import { Button } from 'src/common/components/forms/Button'
import { Row } from 'src/common/components/layout/Row'
import { Column } from 'src/common/components/layout/Column'
import { ArticleHeader } from 'src/frontend/components/ArticleHeader'

const State = (): JSX.Element => {
    const [{ dummy }, dispatch] = useStore()
    const { data, loading, error } = useGraphQL()
    const { path } = useURL()

    if (loading) {
        return <div>Loading</div>
    }

    if (error) {
        return <div>Error</div>
    }

    return (
        <Fragment>
            <ArticleHeader title="States" description="description" />
            <Row dom="main">
                <Column dom="article" small={12} medium={8} mediumOffset={2}>
                    <dl>
                        <dt>store</dt>
                        <dd>{dummy ? 'true' : 'false'}</dd>

                        <dt>URL</dt>
                        <dd>{path}</dd>

                        <dt>graphQL</dt>
                        <dd>{data && data._id}</dd>
                    </dl>
                    <Button
                        onClick={() => dispatch(setDummy(!dummy))}
                        title="Change Store"
                    />
                </Column>
            </Row>
        </Fragment>
    )
}
export default State
