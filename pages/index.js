import Head from 'next/head'

const Home = () => (
  <div className='container'>
    <Head>
      <title>Météo</title>
      <link rel='icon' href='/favicon.ico' />
    </Head>
    <h1>Météo</h1>
    <p>Cliquez sur un lien dans l'en-tête</p>
  </div>
)

export default Home
