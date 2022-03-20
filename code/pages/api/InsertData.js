import { MongoClient } from "mongodb";
import { clientPromise } from "./mongodb";
const handler = async (req, res) => {
  const collName = req.body.collection;
  const client = await MongoClient.connect(process.env.MONGODB_URI);

  const db = client.db();
  const Collection = db.collection(collName);
  console.log(collName);
  if (req.method === "POST") {
    // console.log(res.insertObj);
    await Collection.insertOne(req.body.insertObj);
    client.close();

    res.status(201).send({ Message: "DATA Inserted Successfully" });
  }
};

export default handler;
