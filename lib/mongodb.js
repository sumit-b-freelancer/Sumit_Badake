import { MongoClient } from 'mongodb'

const uri = process.env.MONGODB_URI
let clientPromise

if (!uri) {
  console.warn('MONGODB_URI not set — contact form will run in fallback mode')
  clientPromise = null
} else {
  if (!global._mongoClientPromise) {
    const client = new MongoClient(uri)
    global._mongoClientPromise = client.connect()
  }
  clientPromise = global._mongoClientPromise
}

export default clientPromise
import { MongoClient } from 'mongodb'

const uri = process.env.MONGODB_URI
let client

if(!uri) throw new Error('Please add MONGODB_URI to .env')

if(!global._mongoClientPromise){
  client = new MongoClient(uri)
  global._mongoClientPromise = client.connect()
}

export default global._mongoClientPromise