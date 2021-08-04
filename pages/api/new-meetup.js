import { MongoClient } from "mongodb";

// /api/new-meetup
// POST /api/new-meetup
async function handler(req, res) {
  console.log("handler");
  if (req.method === "POST") {
    const data = req.body;

    const { title, image, address, description } = data;

    const client = await MongoClient.connect(
      "mongodb+srv://admin:1234@cluster0.onkpv.mongodb.net/meetups?retryWrites=true&w=majority"
    );
    const db = client.db();

    const meetupsCollection = db.collection("meetups");

    const result = await meetupsCollection.insertOne(data);

    // Close connection
    client.close();

    res.status(201).json({ message: "Meetup inserted" });
  }
}

export default handler;
