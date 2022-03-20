import { MongoClient } from "mongodb";
import { clientPromise } from "./mongodb";
const handler = async (req, res) => {
  if (req.method === "POST") {
    const collName = req.body.collection;
    const limit = req.body.limit ?? 10;
    console.log(collName);
    const client = await MongoClient.connect(process.env.MONGODB_URI);

    const db = client.db();
    const Collection = db.collection(collName);

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
