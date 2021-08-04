import router, { useRouter } from "next/router";
import NewMeetupForm from "../../components/meetups/NewMeetupForm";
import Head from "next/head";

function NewMeetup() {
  const router = useRouter();

  async function addMeetupHandler(enteredMeetupData) {
    const res = await fetch("/api/new-meetup", {
      method: "POST",
      body: JSON.stringify(enteredMeetupData),
      headers: {
        "Content-Type": "application/json",
      },
    });

    const data = await res.json();

    console.log(data);

    router.push("/");
  }

  return (
    <>
      <h1> Welcome to NewMeetup</h1>
      <Head>
        <title>Add new meetup</title>
        <meta name="description" content="Add new Meetup Page" />
      </Head>
      <NewMeetupForm onAddMeetup={addMeetupHandler} />
    </>
  );
}

export default NewMeetup;
