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

export type OperationFields = (string | Record<string, OperationFields>)[]
