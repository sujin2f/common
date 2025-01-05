import express from 'express'
import { createHandler } from 'graphql-http/lib/use/http'
import { buildSchema } from 'graphql'
import { graphqlSchema } from 'src/constants/graphql'
import { dummy } from 'src/server/api/graphql/dummy'

const graphqlRouter = express.Router()
const schema = buildSchema(graphqlSchema)

graphqlRouter.use(
    '/',
    createHandler({
        schema,
        rootValue: {
            dummy,
        },
    }),
)

export { graphqlRouter }
