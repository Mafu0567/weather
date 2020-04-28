import Head from 'next/head'

const PageTitle = 'Météo'
const Home = () => (
  <div className='container'>
    <Head>
      <title>{PageTitle}</title>
      <link rel='icon' href='/favicon.ico' />
    </Head>
    <h1>{PageTitle}</h1>
    <p>Voici la page d'accueil pour le TPI.</p>
    <p>Cliquez sur un lien dans l'en-tête.</p>
  </div>
)

export default Home
