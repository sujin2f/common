import express from 'express'
import { config as dotEnvConfig } from 'dotenv'
import compression from 'compression'
import path from 'path'
import moduleAlias from 'module-alias'
import http from 'http'

const { baseDir, rootDir } = require('src/common/utils/path')
const nodeEnv = process.env.NODE_ENV as string

// Alias
if (['production'].includes(nodeEnv)) {
    moduleAlias.addAlias('src', baseDir)
    moduleAlias()
}

/**
 * .env
 */

if (nodeEnv === 'development') {
    dotEnvConfig({ path: path.resolve(rootDir, `.env`) })
}

/* eslint-disable import/first */
import { mongoConnect } from 'src/common/utils/mongo-connect'
import { staticRouter } from 'src/server/routes/static'
import { graphqlRouter } from 'src/server/routes/graphql'
/* eslint-enable import/first */

// Create a new express application instance
const app: express.Application = express()
const server = http.createServer(app)
const port = process.env.PORT

app.use(compression({ filter: shouldCompress }))

function shouldCompress(req: any, res: any) {
    if (req.headers['x-no-compression']) {
        // don't compress responses with this request header
        return false
    }

    // fallback to standard filter function
    return compression.filter(req, res)
}

app.use('/graphql', graphqlRouter)
app.use('/', staticRouter)

// Go!
server.listen(port, () => {
    console.log(`🤩 Server started at http://localhost:${port}`)
    mongoConnect()
        .then(() => console.log('🤩 Mongo DB connected'))
        .catch((e) => console.log('😭 Failed to connect Mongo DB:', e))
})
