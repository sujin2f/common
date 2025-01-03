export type DataType = 'String' | 'Int' | 'Float' | 'Boolean' | 'Date'

type QueryRuternType = Record<string, Type | Type[]>

export type Type = {
    [data: string]: DataType | DataType[] | QueryRuternType
}

export type Types = {
    [type: string]: Type
}

export type QueryParamsObject = {
    type: DataType
    required: boolean
}

export type QueryParams =
    Record<string, QueryParamsObject | DataType>

export type Query = {
    [query: string]: {
        params?: QueryParams
        return: QueryRuternType 
    }
}
