import { useQuery } from 'src/common/graphql/useQuery'
import { operation } from 'src/constants/graphql'

export const useGraphQL = () => {
    const { data, loading, error } = useQuery(operation, {
        id: 'yo',
        name: 'yo',
    })
    return { data, loading, error }
}
