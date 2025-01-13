import express, { Response, Request } from 'express'
import { config as dotEnvConfig } from 'dotenv'
import compression from 'compression'
import path from 'path'
import moduleAlias from 'module-alias'
import http from 'http'

const rootDir = process.cwd()
const baseDir = path.resolve(rootDir, '.build', process.env.NODE_ENV || '')
const nodeEnv = process.env.NODE_ENV as string

// Alias
if (['production'].includes(nodeEnv)) {
    moduleAlias.addAlias('src', baseDir)
    moduleAlias()
}

/**
 * .env
 */
dotEnvConfig({ path: path.resolve(rootDir, '.env') })

import { staticRouter } from 'src/server/routes/static'
import { graphqlRouter } from 'src/server/routes/graphql'
import { mongoConnect } from 'src/common/utils/mongo-connect'

// Create a new express application instance
const app: express.Application = express()
const server = http.createServer(app)
const port = process.env.PORT

app.use(compression({ filter: shouldCompress }))
function shouldCompress(req: Request, res: Response) {
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
    mongoConnect().then(() => console.log('🤩 Mongo DB connected'))
})
