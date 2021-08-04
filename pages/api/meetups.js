import { MongoClient } from "mongodb";

async function handlerGetMeetup(req, res) {
  if (req.method === "GET") {
    const client = await MongoClient.connect(
      "mongodb+srv://admin:1234@cluster0.onkpv.mongodb.net/meetups?retryWrites=true&w=majority"
    );
    const db = client.db();

    const meetupsCollection = db.collection("meetups");

    const result = await meetupsCollection.find();
  }
}
