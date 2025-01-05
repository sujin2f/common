import { Argument, IQuery, ReturnType } from '.'
import { Scalar } from './constants'
import { argumentsToString, returnTypeToString } from './util'

type Props = {
    name: string
    return: ReturnType<string>
    arguments?: Record<string, Argument<Scalar>>
}

export class GraphQLQuery implements IQuery {
    readonly name: string
    readonly return: ReturnType<string>
    readonly arguments: Record<string, Argument<Scalar>>

    public constructor(props: Props) {
        this.name = props.name
        this.return = props.return
        this.arguments = props.arguments || {}
    }

    toString() {
        const {
            type: { name },
            list,
        } = this.return
        return `${this.name}${argumentsToString(this.arguments)}: ${returnTypeToString(name, list)}`
    }
}

export class GraphQLQueries {
    private queries: GraphQLQuery[]
    public constructor(...queries: GraphQLQuery[]) {
        this.queries = queries
    }
    toString() {
        const queries = this.queries.map((q) => q.toString()).join('\n')
        return `type Query {\n${queries}\n}`
    }
}
