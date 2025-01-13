import { GQLQuery } from 'src/common/graphql/query'
import { GQLString, GQLType } from 'src/common/graphql/type'

type DummyType = {
    id: string
    name: string
}

export const Dummy = new GQLType<DummyType>('Dummy', {
    id: { type: GQLString, required: true },
    name: { type: GQLString, required: true },
})
export const queryDummy = new GQLQuery<[string, string], DummyType>(
    'dummy',
    {
        id: {
            type: GQLString,
            required: true,
        },
        name: {
            type: GQLString,
            required: true,
        },
    },
    {
        type: Dummy,
    },
)
