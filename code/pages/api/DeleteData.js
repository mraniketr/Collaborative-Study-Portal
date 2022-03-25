import { MongoClient, ObjectId } from "mongodb";
import { clientPromise } from "./mongodb";
const handler = async (req, res) => {
  const collName = req.body.collection;
  const client = await MongoClient.connect(process.env.MONGODB_URI);

  const db = client.db();
  const Collection = db.collection(collName);
  console.log(collName);
  const deleteId = req.body.deleteId;
  if (req.method === "DELETE") {
    // console.log(res.insertObj);
    await Collection.deleteOne(req.body.filter ?? { _id: ObjectId(deleteId) });
    client.close();

    res.status(201).send({ Message: "DATA Deleted Successfully" });
  }
};

export default handler;
