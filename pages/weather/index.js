import Head from 'next/head'
import ListCities from '../../components/ListCities/ListCities'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Météo</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1>Météo</h1>
      <div className="grid">
        <input type="text" placeholder="Search.." />
        <ListCities />
        <img src="/simplechmap.svg" alt="carte de la suisse" />
      </div>
    </div>
  )
}
