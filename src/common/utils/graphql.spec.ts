// yarn test graphql.spec.ts

import type { Type, Types, Query } from 'src/common/types/graphql'
import { buildSchema, getQuery } from './graphql'

const Post: Type = {
    _id: 'String',
    slug: ['String'],
}

const Category: Type = {
    _id: 'Int',
    slug: ['String'],
    date: 'Date',
    tags: { Post },
    cats: { Post: [ Post ] },
}

const types: Types = {
    Post,
    Category,
}

const query: Query = {
    post: {
        params: {
            id: {
                type: 'String',
                required: true,
            },
            date: {
                type: 'Int',
                required: true,
            },
        },
        return: { Post },
    },
    categories: {
        params: {
            id: 'String',
        },
        return: { Category: [ Category ] },
    },
    tag: {
        return: { Post },
    },
}

describe('graphql.ts', () => {
    it('buildSchema()', () => {
        const schema = buildSchema(query, types)
        expect(
            schema.includes('post(id:String!, date:Int!): Post'),
        ).toBeTruthy()
        expect(
            schema.includes('categories(id:String): [Category]'),
        ).toBeTruthy()
        expect(schema.includes('slug: [String]')).toBeTruthy()
    })
    it('getQuery()', () => {
        const queryStr = getQuery(query, 'categories')
        console.log(queryStr)
        expect(false).toBeTruth()
    })
})
