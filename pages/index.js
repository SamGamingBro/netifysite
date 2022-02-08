import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>ISucht Start-seite!</title>
        <link rel="icon" href="favicon.com/icon" />
      </Head>

      <main>
        <Header title="Wilkommen auf isucht!" />
        <p className="description">
          ISucht Service sind nicht verfügbar! <code>Tut uns leid!</code>
        </p>
      </main>

      <Footer />
    </div>
  )
}
