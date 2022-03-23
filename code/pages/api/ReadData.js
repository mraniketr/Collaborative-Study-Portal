import { MongoClient } from "mongodb";
import { clientPromise } from "./mongodb";
const handler = async (req, res) => {
  const collName = req.body.collection;
  const filter = req.body.filter;
  const limit = req.body.limit ?? 10;
  const client = await MongoClient.connect(process.env.MONGODB_URI);

  const db = client.db();
  const Collection = db.collection(collName);
  console.log("API REQ STARTED", collName, filter);
  if (req.method === "POST") {
    const resData = await Collection.find(filter ?? {})
      .limit(limit)
      .toArray();
    console.log(resData);
    // console.log(await Collection.countDocuments());
    client.close();
    if (resData.length > 0)
      res.status(201).send({ Message: "DATA FOUND", data: resData });
    else res.status(500).send({ Message: "DATA NOT FOUND" });
    console.log("API REQ ENDED", collName, filter);
  }
};

export default handler;
