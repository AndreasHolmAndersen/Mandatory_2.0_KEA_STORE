import { MongoClient } from 'mongodb';

const url = 'mongodb://localhost:27017';

const dbName = 'KeaStore';

const client = await MongoClient.connect(url);

const db = client.db(dbName);

export default {
    client: client,
    users: db.collection('users')
}