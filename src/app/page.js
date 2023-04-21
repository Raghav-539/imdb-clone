import Results from "@/components/Results";
import Head from "next/head";


const API_KEY = process.env.API_KEY;
export default async function Home({ searchParams }) {
  const genre = searchParams.genre || "fetchTrending";

  // getting network request 

  const res = await fetch(
    `https://api.themoviedb.org/3/${
      genre === "fetchTopRated" ? "movie/top_rated" : "trending/all/week" 
    }?api_key=${API_KEY}&language=en-US&page=1`,
    {
      // refershing database after short time
      next: { revalidate: 100000 },
    }
  );
  if (!res.ok) {
    throw new Error("Failed To Load Movie Data");
  }
  const data = await res.json();
  const results = data.results;
  return (
    <>
      <div>
      <Head>
        <link rel="shortcut icon" href="/favicon.ico" />
      </Head>
        <Results results={results} />
      </div>
    </>
  );
}
