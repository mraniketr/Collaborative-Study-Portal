import Head from "next/head";
import Image from "next/image";
import { useUser } from "@auth0/nextjs-auth0";
import Navbar from "../components/Navbar";
import { Carousel } from "antd";

export default function Index() {
  const { user, error, isLoading } = useUser();
  const contentStyle = {
    height: "160px",
    color: "#fff",
    lineHeight: "160px",
    textAlign: "center",
    background: "#364d79",
  };

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
        <Navbar />
        {/* <br />
      <h1 className="text-3xl font-bold underline">Landing Page</h1>
      <br />
      <a href="/api/auth/login">Login</a>
      <br />  
      <a href="/api/auth/logout">Logout</a>
      <br />
      <a href="/protected">protected</a>
      <br />
      <a href="/api/auth/me">User Data</a>
      <br />
      <a href="/courses">courses</a>
      <br />
      <br />
      <br /> */}
      </div>
    );
  }

  return (
    <div>
      <Head>
        <title>Collaborative Study Portal</title>
        <meta name="description" content="Learn together Grow together" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <Carousel effect="fade" style={{ paddingTop: 64 }}>
        <div>
          <h3 style={contentStyle}>1</h3>
        </div>
        <div>
          <h3 style={contentStyle}>2</h3>
        </div>
        <div>
          <h3 style={contentStyle}>3</h3>
        </div>
        <div>
          <h3 style={contentStyle}>4</h3>
        </div>
      </Carousel>
    </div>
  );
}
