import { MongoClient } from "mongodb";
const client = new MongoClient('mongodb://localhost:27017/box', { useNewUrlParser: true, useUnifiedTopology: true })

export default client

