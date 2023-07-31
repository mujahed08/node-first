import { MongoClient } from 'mongodb';



const url = 'mongodb://root:example@localhost:27017';

export const get_client =  async () => {

    const client = await MongoClient.connect(url, { useNewUrlParser: true })
        .catch(err => { console.log(err); });

    return client;

}

export const get_db = async () => {
    try {
        const client = await get_client()
        const db = await client.db("node-firstdb");
        return db;
    } catch (err) {
        console.log(err);
        return null
    }
}