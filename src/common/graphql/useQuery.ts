import { useQuery as reactUseQuery } from '@tanstack/react-query'
import { IOperation } from 'src/common/graphql'

export const useQuery = (operation: IOperation) => {
    const { data, isLoading, error } = reactUseQuery({
        queryKey: [operation.query.name],
        queryFn: () =>
            fetch('/graphql', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ query: operation.toString() }),
            })
                .then((response) => {
                    if (response.status >= 400) {
                        throw new Error('Error fetching data')
                    }
                    return response.json()
                })
                .then((data) => data.data[operation.query.name]),
    })

    return { data, loading: isLoading, error }
}
