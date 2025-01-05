import { OperationFields, IQuery, IOperation, OperationArgs } from '.'
import { Error } from '../model/Error'

export class Operation implements IOperation {
    readonly query: IQuery
    readonly args: OperationArgs
    readonly fields: OperationFields

    private readonly TYPE_VALIDATION = [
        [['String', 'ID'], 'string'],
        [['Int', 'Float'], 'number'],
        [['Boolean'], 'boolean'],
    ]

    constructor(
        query: IQuery,
        args: OperationArgs,
        ...fields: OperationFields
    ) {
        this.query = query
        this.args = args
        this.fields = fields
        this.validateOperation()
    }

    toString() {
        let argsString = Object.entries(this.args)
            .map(([key, _value]) => {
                let value = _value
                if (typeof value === 'string') {
                    value = `"${value}"`
                }
                if (typeof value === 'boolean') {
                    value = value ? 'true' : 'false'
                }
                return `${key}: ${value}`
            })
            .join(', ')
        const filedString = this.query.return.type.toOperation(...this.fields)
        argsString = argsString ? `(${argsString})` : ''
        return `{\n${this.query.name}${argsString} ${filedString}\n}`
    }

    private validateOperation() {
        // Validation Required
        Object.entries(this.query.arguments)
            .filter(([, value]) => value.required)
            .forEach(([key]) => {
                if (!Object.keys(this.args).includes(key)) {
                    throw new Error(
                        `GraphQL argument ${key} is required in query ${this.query.name}`,
                    )
                }
            })

        // Validation type
        const keys = Object.keys(this.query.arguments)
        Object.entries(this.args).forEach(([key, value]) => {
            if (!keys.includes(key)) {
                throw new Error(
                    `GraphQL argument ${key} does not exist in query ${this.query.name}`,
                )
            }

            this.TYPE_VALIDATION.forEach((validation) => {
                if (
                    validation[0].includes(
                        this.query.arguments[key].type.name,
                    ) &&
                    typeof value !== validation[1]
                ) {
                    throw new Error(
                        `GraphQL argument ${key} is not a ${validation[1]} value in query ${this.query.name}`,
                    )
                }
            })
        })
    }
}
