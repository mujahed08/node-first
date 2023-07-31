import { get_db } from "../mongo/connect.js"

export const create = async (user) => {

    const db = await get_db()

    const result = await db.collection('user').insertOne(user)

    console.log(
      `${result.insertedCount} documents were inserted with the _id: ${result.insertedId}`,
    );

}

export const get = async () => {

  const db = await get_db()
  const cursor = db.collection('user').find({});

  let list = []
  for await (const doc of cursor) {
    console.dir(doc);
    list.push(doc)
  }

  return list
} 