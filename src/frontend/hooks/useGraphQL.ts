import { Operation } from 'src/common/graphql/operation'
import { useQuery } from 'src/common/graphql/useQuery'
import { query } from 'src/constants/graphql'

export const useGraphQL = () => {
    const operation = new Operation(query, 'id')
    const { data, loading, error } = useQuery(operation, {
        id: 'yo',
        name: 'yo',
    })
    return { data, loading, error }
}
