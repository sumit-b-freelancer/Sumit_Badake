import { MongoClient } from 'mongodb'

const uri = process.env.MONGODB_URI
let client

if(!uri) throw new Error('Please add MONGODB_URI to .env')

if(!global._mongoClientPromise){
  client = new MongoClient(uri)
  global._mongoClientPromise = client.connect()
}

export default global._mongoClientPromise