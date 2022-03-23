import Head from "next/head";
import Image from "next/image";
import { useUser } from '@auth0/nextjs-auth0';
import Navbar from "../components/Navbar";

export default function Index() {
  const { user, error, isLoading } = useUser();

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>{error.message}</div>;

  if (user) {
    return (
    <div>
      <Head>
        <title>Collaborative Study Portal</title>
        <meta name="description" content="Learn together Grow together" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div> <Navbar />  </div>
     
      <div style={{ padding:64 }}>
      <div class="w-full h-screen flex items-center justify-center bg-gray-200">
    <div class="relative w-96 h-auto bg-gray-400 rounded-md pt-24 pb-8 px-4 shadow-md hover:shadow-lg transition flex flex-col items-center">
        <div class="absolute rounded-full bg-gray-100 w-28 h-28 p-2 z-10 -top-8 shadow-lg hover:shadow-xl transition">
            <div class="rounded-full bg-black w-full h-full overflow-auto">
                <img src={user.picture} />
            </div>
        </div>
          <label class="font-bold text-gray-100 text-lg">
          { user.name }
          </label>
          <p class="text-center text-gray-200 mt-2 leading-relaxed">
          Email : { user.email}
          </p>
          <p class="text-center text-gray-200 mt-2 leading-relaxed">
          Language : { user.locale }
          </p>
          <br />
          <a class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full" href="/api/auth/logout">Logout</a>
        </div>
      </div>
    </div>
    </div>
      
      );
  }
}