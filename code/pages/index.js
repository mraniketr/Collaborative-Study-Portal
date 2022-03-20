import Head from 'next/head'
import Image from 'next/image'

export default function Home() {
  return (
    <div >
      <Head>
        <title>Collaborative Study Portal</title>
        <meta name="description" content="Learn together Grow together" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <h1 className="text-3xl font-bold underline">
      Landing Page
    </h1>
    </div>
  )
}
