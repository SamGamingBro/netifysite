import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Dexpress Start-Site!</title>
        <link rel="icon" href="favicon.com/icon" />
      </Head>

      <main>
        <Header title="Welcome to Dexpress!" />
        <p className="description">
          Dexpress! <code>Im Sorry!</code>
        </p>
      </main>

      <Footer />
    </div>
  )
}
