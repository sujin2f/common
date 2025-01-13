import { useQuery } from 'src/common/graphql/useQuery'
import { queryDummy } from 'src/constants/graphql'

export const useGraphQL = () => {
    const { data, loading, error } = useQuery(
        queryDummy,
        'id',
        'arg0_id',
        'arg1_name',
    )
    return { data, loading, error }
}
