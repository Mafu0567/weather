import Head from 'next/head'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Météo</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1>Météo</h1>
      <input type="text" placeholder="Search.." />
      <ul>
        <li>Ville</li>
        <li>Ville</li>
        <li>Ville</li>
        <li>Ville</li>
        <li>Ville</li>
        <li>Ville</li>
        <li>Ville</li>
        <li>Ville</li>
      </ul>
      <img src="/simplechmap.svg" alt="carte de la suisse" />
    </div>
  )
}
