import { dummy } from 'src/server/api/graphql/dummy'
import { createExpressRouter } from 'src/common/graphql/createExpressRouter'
import { Dummy, queryDummy } from 'src/constants/graphql'

export const graphqlRouter = createExpressRouter(
    Dummy,
    queryDummy.setCallback(dummy),
)
