import { buildSchema, getQuery } from 'src/common/utils/graphql'
import type { Type, Query } from 'src/common/types/graphql'

const Dummy: Type = {
    _id: 'String',
}

const query: Query = {
    dummy: {
        params: {
            id: {
                type: 'String',
                required: true,
            },
        },
        return: { Dummy },
    },
}

export const requestDummy = getQuery(query, 'dummy')
export const graphqlSchema = buildSchema(query, { Dummy })
