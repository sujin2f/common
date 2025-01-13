import mongoose from 'mongoose'
import { Error } from 'src/common/model/Error'

export const mongoConnect = async (): Promise<typeof mongoose> => {
    const host = process.env.MONGO
    const user = process.env.MONGO_USER
    const pass = process.env.MONGO_PASS
    const userPass = user && pass ? `${user}:${pass}@` : ``
    const uri = `mongodb://${userPass}${host}:27017`
    const dbName = process.env.MONGO_DATABASE

    console.log(`Mongo DB connection: ${uri} database ${dbName}`)
    if (!user || !pass || !dbName) {
        throw new Error('Mongo DB connection.')
    }

    return mongoose
        .set('strictQuery', true)
        .connect(uri, {
            dbName,
        })
        .then((db) => {
            return db
        })
        .catch((e) => {
            throw new Error(e)
        })
}
