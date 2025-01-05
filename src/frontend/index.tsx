import React from 'react'
import ReactDOM from 'react-dom/client'
import * as serviceWorker from 'src/frontend/serviceWorker'
import { BrowserRouter } from 'react-router-dom'
// import { ApolloProvider } from '@apollo/client/react/context/ApolloProvider'
// import { ApolloClient } from '@apollo/client/core/ApolloClient'
// import { InMemoryCache } from '@apollo/client/cache/inmemory/inMemoryCache'

import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

import { Router } from 'src/frontend/Router'
import { Store } from 'src/frontend/store'

// const cache = new InMemoryCache()
// export const graphqlClient = new ApolloClient({
//     uri: '/graphql',
//     cache,
// })
const queryClient = new QueryClient()

const root = document.getElementById('root')
if (root) {
    const dom = ReactDOM.createRoot(root)
    dom.render(
        // <ApolloProvider client={graphqlClient}>
        <QueryClientProvider client={queryClient}>
            <BrowserRouter>
                <Store>
                    <Router />
                </Store>
            </BrowserRouter>
        </QueryClientProvider>,
    )
}

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
if (process.env.NODE_ENV === 'production') {
    serviceWorker.register()
} else {
    serviceWorker.unregister()
}
