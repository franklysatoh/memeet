// import { useEffect, useState } from "react";
import MeetupList from "../components/meetups/MeetupList";
import { MongoClient } from "mongodb";
import Head from "next/head";

const DUMMY_MEETUPS = [
  {
    id: "m1",
    title: "A 1 Meetup",
    image:
      "https://images.unsplash.com/photo-1593642532009-6ba71e22f468?ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80",
    address: "L.A",
    description: "Meetup in L.A with us",
  },
  {
    id: "m2",
    title: "A 2 Meetup",
    image:
      "https://images.unsplash.com/photo-1593642532009-6ba71e22f468?ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80",
    address: "L.A 2",
    description: "Meetup in L.A 2 with us",
  },
  {
    id: "m3",
    title: "A 3 Meetup",
    image:
      "https://images.unsplash.com/photo-1593642532009-6ba71e22f468?ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80",
    address: "L.A 3",
    description: "Meetup in L.A 3 with us",
  },
];

function HomePage(props) {
  /**
   * defined useState([]) which means at the beginning set [], array empty
   */
  // const [loadedMeetups, setLoadedMeetups] = useState([]);

  // useEffect(() => {
  // send a http requrest and fetch data
  // setLoadedMeetups(DUMMY_MEETUPS);
  // }, []);

  return (
    <>
      <Head>
        <title>NextJS Meetup</title>
        <meta name="description" content="This is the description in head" />
      </Head>
      <MeetupList meetups={props.meetups} />
    </>
  );
}

// This function gets called at build time on server-side.
// It may be called again, on a serverless function, if
// revalidation is enabled and a new request comes in
export async function getStaticProps() {
  // fetch data from an API
  // Clone as a sample
  const client = await MongoClient.connect(
    "mongodb+srv://admin:1234@cluster0.onkpv.mongodb.net/meetups?retryWrites=true&w=majority"
  );
  const db = client.db();

  const meetupsCollection = db.collection("meetups");

  const result = await meetupsCollection.find().toArray();

  client.close();

  return {
    props: {
      // will be passed to the page component as props
      meetups: result.map((meetup) => ({
        title: meetup.title,
        address: meetup.address,
        description: meetup.description,
        image: meetup.image,
        id: meetup._id.toString(),
      })),
    },
    // Next.js will attempt to re-generate the page:
    // - When a request comes in
    // - At most once every 10 seconds
    revalidate: 10, //. In seconds // a props of NextJS. An optional amount in seconds after which a page re-generation can occur
  };
}

// This gets called on every request
// Code will be run in the server. not in client
// export async function getServerSideProps(context) {

//   const req = context.req;
//   const res = context.res;

//   console.log('getServerSideProps');

//   // getch data from an API
//   return {
//     props: {
//       meetups: DUMMY_MEETUPS
//     }
//   }
// }

export default HomePage;
