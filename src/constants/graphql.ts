const query = `
    dummy(param: String!): Dummy
`

const type = `
type Dummy {
    _id: String
}
`

export const requestDummy = `
query dummy($param: String!) {
    dummy(param: $param) {
        _id
    }
}
`

export const graphqlSchema = `
    type Query {
        ${query}
    }
    ${type}
`
