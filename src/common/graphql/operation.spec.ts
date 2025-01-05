// yarn test operation.spec.ts

import { GraphQLObjectType, GraphQLString } from './object-type'
import { Operation } from './operation'
import { GraphQLQuery } from './query-type'

describe('operation.ts', () => {
    const User = new GraphQLObjectType({
        name: 'User',
        fields: {
            id: { type: GraphQLString, required: true },
            name: { type: GraphQLString },
            email: { type: GraphQLString },
        },
    })

    const Post = new GraphQLObjectType({
        name: 'Post',
        fields: {
            id: { type: GraphQLString, required: true },
            author: { type: User },
        },
    })

    const query = new GraphQLQuery({
        name: 'post',
        arguments: {
            id: {
                type: GraphQLString,
                required: true,
            },
        },
        return: {
            type: Post,
        },
    })

    const operation = new Operation(query, { id: 'name' }, 'id', {
        author: ['id', 'name', 'email'],
    })

    it.only('toOperation()', () => {
        const result = operation.toString()
        expect(result.includes('post(id: "name") {')).toBeTruthy()
    })
})
