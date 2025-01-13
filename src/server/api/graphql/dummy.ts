import { getOne } from 'src/server/api/mongo/dummy'
import { Cached } from 'src/common/model/Cached'
import { GQLReturnDummy } from 'src/types/graphql'

export const dummy = async (id: string, name: string) => {
    const cacheKey = `dummy ${id} ${name}`
    return await Cached.getInstance().getOrExecute<GQLReturnDummy>(
        cacheKey,
        async () => {
            const dummy = await getOne()
            return dummy
        },
    )
}
