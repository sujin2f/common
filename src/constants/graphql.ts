import {
    GraphQLObjectType,
    GraphQLString,
} from 'src/common/graphql/object-type'
import { GraphQLQueries, GraphQLQuery } from 'src/common/graphql/query-type'
import { getSchema } from 'src/common/graphql/schema'

const dummy = new GraphQLObjectType({
    name: 'Dummy',
    fields: {
        id: { type: GraphQLString, required: true },
        name: { type: GraphQLString, required: true },
    },
})
export const query = new GraphQLQuery({
    name: 'dummy',
    arguments: {
        id: {
            type: GraphQLString,
            required: true,
        },
        name: {
            type: GraphQLString,
            required: true,
        },
    },
    return: {
        type: dummy,
    },
})
const queries = new GraphQLQueries(query)
export const graphqlSchema = getSchema(queries, dummy)
