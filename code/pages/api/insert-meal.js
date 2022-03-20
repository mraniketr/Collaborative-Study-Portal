import { MongoClient } from "mongodb";

const handler = async (req, res) => {
  const DATABASE_NAME = "meal_collection";
  const DATABASE_PASSWORD = "fwbl7EkC8VvGSlbT";

  if (req.method === "POST") {
    const client = await MongoClient.connect(process.env.MONGODB_URI);
    const db = client.db();
    const mealsCollection = db.collection("meals");
    await mealsCollection.insertOne(req.body);

    client.close();

    res.status(201).send({ Message: "Meal inserted" });
  }
};

export default handler;