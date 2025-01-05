import { useQuery } from '@tanstack/react-query'
import { Operation } from 'src/common/graphql/operation'

// import { useQuery, gql } from '@apollo/client'
// import { Error } from 'src/common/model/Error'

import { query } from 'src/constants/graphql'
// import { GQLParamDummy, GQLReturnDummy } from 'src/types/graphql'

export const useGraphQL = () => {
    const operation = new Operation(query, { id: 'yo', name: 'yo' }, 'id')
    const result = useQuery({
        queryKey: ['dummy'],
        queryFn: () =>
            fetch('/graphql', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ query: operation.toString() }),
            }).then((res) => res.json()),
    })

    console.log(result)

    //     const { data, loading, error } = useQuery<
    //         { dummy: GQLReturnDummy },
    //         GQLParamDummy
    //     >(gql(requestDummy), {
    //         variables: { id: 'param', name: 'param' },
    //         context: { fetchOptions: { method: 'GET' } },
    //     })
    //     if (error?.message) {
    //         new Error(error?.message, { level: 'warn' })
    //     }
    //     return {
    //         data: data && data.dummy,
    //         loading,
    //         error,
    //     }
}
