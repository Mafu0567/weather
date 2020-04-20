import Head from 'next/head'
import WeatherIcons from '../components/WeatherIcons/WeatherIcons'
const Home = () => (
  <div className='container'>
    <Head>
      <title>Météo</title>
      <link rel='icon' href='/favicon.ico' />
    </Head>
    <h1>Météo</h1>
    <p>Voici la page d'accueil pour le TPI.</p>
    <p>Cliquez sur un lien dans l'en-tête.</p>
    <WeatherIcons name='sun' width={100} />
  </div>
)

export default Home
