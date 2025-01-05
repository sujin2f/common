import { Scalar } from './constants'

export type Argument<T extends Scalar> = {
    type: IObjectType<T>
    required?: boolean
}

export type ReturnType<T extends string> = {
    type: IObjectType<T>
    list?: boolean
}

export type Fields = Record<string, Argument<string> & ReturnType<string>>
export type OperationFields = (string | Record<string, OperationFields>)[]
export type OperationArgs = Record<string, string | number | boolean>

export interface IObjectType<T extends string> {
    readonly name: T
    readonly fields: Fields
    toString: () => string
    toOperation: (...field: OperationFields) => string
}

export interface IQuery {
    readonly name: string
    readonly return: ReturnType<string>
    readonly arguments: Record<string, Argument<Scalar>>
    toString: () => string
}

export interface IOperation {
    readonly query: IQuery
    readonly args: OperationArgs
    readonly fields: OperationFields
    toString: () => string
}
