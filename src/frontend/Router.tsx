import React, { Suspense, lazy } from 'react'
import { Routes, Route } from 'react-router-dom'

import { Wrapper } from 'src/common/components/layout/Wrapper'
import { Public } from 'src/frontend/scenes/public'
import { Loading } from 'src/frontend/components/Loading'

const FrontPage = lazy(() => import('src/frontend/scenes/FrontPage'))
const Intro = lazy(() => import('src/frontend/scenes/public/Intro'))
const Typography = lazy(() => import('src/frontend/scenes/public/Typography'))
const State = lazy(() => import('src/frontend/scenes/public/State'))
const Form = lazy(() => import('src/frontend/scenes/public/Form'))
const Grid = lazy(() => import('src/frontend/scenes/public/Grid'))
const Navigation = lazy(() => import('src/frontend/scenes/public/Navigation'))

export function Router() {
    return (
        <Wrapper>
            <Routes>
                <Route
                    element={
                        <Suspense fallback={<Loading />}>
                            <FrontPage />
                        </Suspense>
                    }
                    path="/"
                />

                <Route
                    element={
                        <Public>
                            <Suspense fallback={<Loading />}>
                                <Intro />
                            </Suspense>
                        </Public>
                    }
                    path="/intro"
                />

                <Route
                    element={
                        <Public>
                            <Suspense fallback={<Loading />}>
                                <Grid />
                            </Suspense>
                        </Public>
                    }
                    path="/grid"
                />

                <Route
                    element={
                        <Public>
                            <Suspense fallback={<Loading />}>
                                <Typography />
                            </Suspense>
                        </Public>
                    }
                    path="/typography"
                />

                <Route
                    element={
                        <Public>
                            <Suspense fallback={<Loading />}>
                                <State />
                            </Suspense>
                        </Public>
                    }
                    path="/state/:path"
                />

                <Route
                    element={
                        <Public>
                            <Suspense fallback={<Loading />}>
                                <Form />
                            </Suspense>
                        </Public>
                    }
                    path="/form"
                />

                <Route
                    element={
                        <Public>
                            <Suspense fallback={<Loading />}>
                                <Navigation />
                            </Suspense>
                        </Public>
                    }
                    path="/navigation"
                />
            </Routes>
        </Wrapper>
    )
}
