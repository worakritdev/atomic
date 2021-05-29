import { MongoDataSource } from 'apollo-datasource-mongodb'
import type { ObjectId } from 'mongodb'

interface UserDocument {
    _id: ObjectId
    username: string
    password: string
    email: string
    interests: [string]
}

// This is optional
interface Context {
    loggedInUser: UserDocument
}

export default class Users extends MongoDataSource<UserDocument, Context> {
    getUser(userId) {
        // this.context has type `Context` as defined above
        // this.findOneById has type `(id: ObjectId) => Promise<UserDocument | null | undefined>`
        return this.findOneById(userId)
    }
}
