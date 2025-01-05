import React, { Fragment } from 'react'
import { TopBar } from './TopBar'
import { Button } from 'src/common/components/forms/Button'

import 'src/frontend/scss/front-page.scss'

const FrontPage = () => {
    return (
        <Fragment>
            <TopBar />
            <main className="scene__front-page">
                <h1>BoilerPlate</h1>
                <p>React/Mongo/Graph QL Bootstrap</p>
                <Button title="Get Started" hollow to="/intro" />
            </main>
        </Fragment>
    )
}

export default FrontPage
