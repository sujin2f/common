import React, { Suspense, lazy } from 'react'
import { Routes, Route } from 'react-router-dom'

import { Wrapper } from 'src/frontend/scenes/Wrapper'
import { Public } from 'src/frontend/scenes/public'
import { Loading } from 'src/frontend/components/Loading'
const FrontPage = lazy(() => import('src/frontend/scenes/FrontPage'))
const Intro = lazy(() => import('src/frontend/scenes/public/Intro'))
const Typography = lazy(() => import('src/frontend/scenes/public/Typography'))
const State = lazy(() => import('src/frontend/scenes/public/State'))
const Form = lazy(() => import('src/frontend/scenes/public/Form'))

export const Router = (): JSX.Element => {
    return (
        <Suspense fallback={<Loading />}>
            <Wrapper>
                <Routes>
                    <Route path="/" element={<FrontPage />} />
                    <Route
                        path="/intro"
                        element={
                            <Public>
                                <Intro />
                            </Public>
                        }
                    />
                    <Route
                        path="/typography"
                        element={
                            <Public>
                                <Typography />
                            </Public>
                        }
                    />
                    <Route
                        path="/state/:path"
                        element={
                            <Public>
                                <State />
                            </Public>
                        }
                    />
                    <Route
                        path="/form"
                        element={
                            <Public>
                                <Form />
                            </Public>
                        }
                    />
                </Routes>
            </Wrapper>
        </Suspense>
    )
}
