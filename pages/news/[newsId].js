import { useRouter } from "next/router";

// News Detail

function DetailPage() {
  const router = useRouter();

  router.query.newsId;

  return <h1>Welcome to DetailPage</h1>;
}

export default DetailPage;
