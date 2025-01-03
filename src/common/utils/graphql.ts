import type { Types, Query, QueryParams } from 'src/common/types/graphql'

const getTypeString = (
    type: string | string[] | Record<string, unknown[] | unknown>,
): string => {
    if (typeof type === 'string') {
        return type
    }

    if (Array.isArray(type)) {
        return `[${type[0]}]`
    }

    const [key, value] = Object.entries(type)[0]

    if (Array.isArray(value)) {
        return `[${key}]`
    }

    return key
}

const getParams = (params: QueryParams, prefix = '') => {
    const str = Object.entries({ ...params })
        .map(([param, type]) => {
            const isObject = typeof type === 'object'
            const paramType = isObject ? type['type'] : type
            const required = isObject && type['required'] ? '!' : ''

            return `${prefix}${param}:${paramType}${required}`
        })
        .join(', ')
    return str ? `(${str})` : ''
}

export const buildSchema = (query: Query, typeObj: Types) => {
    // Queries
    const queries = Object.entries(query)
        .map(([key, value]) => {
            const params = value.params ? getParams(value.params) : ''
            const rtn = getTypeString(value.return)
            return `${key}${params}: ${rtn}`
        })
        .join('\n    ')
    const types = Object.entries(typeObj)
        .map(([key, value]) => {
            const types = Object.entries(value)
                .map(([key, type]) => `${key}: ${getTypeString(type)}`)
                .join('\n    ')

            return `
type ${key} {
    ${types}
}`
        })
        .join(',\n')

    return [
        `
type Query {
    ${queries}
}`,
        types,
    ].join(',\n')
}

export const getQuery = (q: Query, key: string) => {
    const params = q[key].params
    const rtn = Object.values(q[key].return)[0]
    const params1 = params ? getParams(params, '$') : ''
    const string1 = params1 ? `${key}${params1} ` : ''
    const string2 = params
        ? Object.keys(params)
              .map((key) => `${key}: $${key}`)
              .join(', ')
        : ''
    const rtnType = Array.isArray(rtn) ? rtn[0] : rtn
    const items = Object.entries(rtnType).map(([key, value]) => {
        return `${key}`
    }).join('\n')

    return `
query ${string1}{
    ${key} ${string2 ? `(${string2}) ` : ''}{
${items}
    }
}`
}
