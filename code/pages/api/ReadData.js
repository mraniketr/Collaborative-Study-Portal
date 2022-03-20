import { MongoClient } from "mongodb";
import { clientPromise } from "./mongodb";
const handler = async (req, res) => {
  const collName = req.body.collection;
  const limit = req.body.limit ?? 10;
  const client = await MongoClient.connect(process.env.MONGODB_URI);

  const db = client.db();
  const Collection = db.collection(collName);
  console.log(collName);
  if (req.method === "POST") {
    const resData = await Collection.find({}, { _id: 0 })
      .limit(limit)
      .toArray();
    // console.log(resData);
    // console.log(await Collection.countDocuments());
    client.close();

    res.status(201).send({ Message: "DATA FOUND", res: resData });
  }
};

export default handler;
