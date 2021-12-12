import Head from 'next/head'

export default function Home() {
  return (
    <main className="relative w-full h-screen">
      <Head>
        <title>3REX</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="absolute p-4 text-center transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2">
        <img src="/logo.svg" alt="3REX Logo" className="w-full mx-auto mb-2" width="100%" height="auto" />
      </div>
    </main>
  )
}
