import Head from "next/head";
import Image from "next/image";

function Home({ data }) {

  console.log(data)
  return (
    <div>
      <Head>
        <title>Collaborative Study Portal</title>
        <meta name="description" content="Learn together Grow together" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <h1 className="text-3xl font-bold underline">Landing Page</h1>
      <a href="/api/auth/login">Login</a>
      <br />
      <a href="/api/auth/logout">Logout</a>
      <br />
      <a href="/protected">protected</a>
      <br />
      <a href="/api/auth/me">User Data</a>
      <br />
      <a href="/meals">test insert data add meals</a>
    </div>
  );
}
export default Home