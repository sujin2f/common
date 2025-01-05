import { getOne } from 'src/server/api/mongo/dummy'
import { Cached } from 'src/common/model/Cached'
import { GQLParamDummy, GQLReturnDummy } from 'src/types/graphql'

export const dummy = async (param: GQLParamDummy): Promise<GQLReturnDummy> => {
    const cacheKey = `dummy ${param.id}`
    return await Cached.getInstance().getOrExecute<GQLReturnDummy>(
        cacheKey,
        async () => {
            const dummy = await getOne()
            return dummy
        },
    )
}
