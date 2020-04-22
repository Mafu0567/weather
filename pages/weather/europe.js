import Head from 'next/head'
import WeatherIcons from '../../components/WeatherIcons/WeatherIcons'

export default function Home () {
  return (
    <div className='container'>
      <Head>
        <title>Météo</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <h1>Météo - Europe</h1>
      <div className='grid'>
        <div>
          <h2>Paris</h2>
          <span>14°</span>
          <WeatherIcons name='sun' />
        </div>
        <div>
          <h2>Zurich</h2>
          <span>16°</span>
          <WeatherIcons name='sun' />
        </div>
        <div>
          <h2>Berlin</h2>
          <span>15°</span>
          <WeatherIcons name='sun' />
        </div>
        <div>
          <h2>Rome</h2>
          <span>13°</span>
          <WeatherIcons name='sun' />
        </div>
      </div>
      <img src='/european_map.svg' alt="carte d'europe" width='100%' />
    </div>
  )
}
