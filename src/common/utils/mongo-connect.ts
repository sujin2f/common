import mongoose from 'mongoose'
import { Error } from 'src/common/model/Error'

mongoose.Promise = global.Promise

export const mongoConnect = async (): Promise<typeof mongoose> => {
    const host = process.env.MONGO
    const user = process.env.MONGO_USER
    const pass = process.env.MONGO_PASS
    const dbName = process.env.MONGO_DATABASE

    const uri = `mongodb://${host}:27017`

    console.log(`Mongo DB connection: ${uri}`)
    if (!user || !pass || !dbName) {
        throw new Error('Mongo DB connection.')
    }

    return mongoose
        .set('strictQuery', true)
        .connect(uri)
        .then((db) => {
            return db
        })
        .catch((e) => {
            console.log(e)
            throw new Error(e)
        })
}
