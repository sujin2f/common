import { useQuery, gql } from '@apollo/client'
import { Error } from 'src/common/model/Error'

import { requestDummy } from 'src/constants/graphql'
import { GQLParamDummy, GQLReturnDummy } from 'src/types/graphql'

export const useGraphQL = () => {
    const { data, loading, error } = useQuery<
        { dummy: GQLReturnDummy },
        GQLParamDummy
    >(gql(requestDummy), {
        variables: { param: 'param' },
        context: { fetchOptions: { method: 'GET' } },
    })

    if (error?.message) {
        new Error(error?.message, { level: 'warn' })
    }

    return {
        data: data && data.dummy,
        loading,
        error,
    }
}
