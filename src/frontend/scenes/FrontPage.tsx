import React, { Fragment } from 'react'
import { TopBar } from './TopBar'

require('src/assets/styles/front-page.scss')

const FrontPage = (): JSX.Element => {
    return (
        <Fragment>
            <TopBar />
            <main className="scene__front-page">
                <h1>Front Page</h1>
                <p>React/Mongo/Graph QL Bootstrap</p>
            </main>
        </Fragment>
    )
}

export default FrontPage
