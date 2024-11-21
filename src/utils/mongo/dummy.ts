import mongoose, { Schema } from 'mongoose'
import { GQLReturnDummy } from 'src/types/graphql'

export const mongoSchema = new Schema<GQLReturnDummy>({})

export const dummy = mongoose.model('dummy', mongoSchema)

export const getOne = async (): Promise<GQLReturnDummy> =>
    await dummy.findOne<GQLReturnDummy>().then((item) => {
        if (!item) {
            addOne()
            throw new Error('Does not exist')
        }
        return item
    })

export const addOne = async (): Promise<boolean> =>
    await getOne()
        .then(() => false)
        .catch(async () => {
            await new dummy().save()
            return true
        })
