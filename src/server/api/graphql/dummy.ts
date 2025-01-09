import { getOne } from 'src/server/api/mongo/dummy'
import { Cached } from 'src/common/model/Cached'
import { GQLReturnDummy } from 'src/types/graphql'
import { GetOperationArgsType } from 'src/common/graphql'
import { operation } from 'src/constants/graphql'

export const dummy = async (
    param: GetOperationArgsType<typeof operation>,
): Promise<GQLReturnDummy> => {
    const cacheKey = `dummy ${param.id}`
    return await Cached.getInstance().getOrExecute<GQLReturnDummy>(
        cacheKey,
        async () => {
            const dummy = await getOne()
            return dummy
        },
    )
}
