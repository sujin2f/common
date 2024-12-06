import React, { Fragment } from 'react'
import { TopBar } from './TopBar'
import { Button } from 'src/common/components/forms/Button'

require('src/assets/styles/front-page.scss')

const FrontPage = (): JSX.Element => {
    return (
        <Fragment>
            <TopBar />
            <main className="scene__front-page">
                <h1>Front Page</h1>
                <p>React/Mongo/Graph QL Bootstrap</p>
                <Button title="Get Started" hollow to="/intro" />
            </main>
        </Fragment>
    )
}

export default FrontPage
