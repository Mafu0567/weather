import geneve from '../../mocks/cities/geneve.json'
import morges from '../../mocks/cities/morges.json'
import lausanne from '../../mocks/cities/lausanne.json'
import sion from '../../mocks/cities/sion.json'
import fribourg from '../../mocks/cities/fribourg.json'
import lachaux from '../../mocks/cities/la-chaux-de-fonds.json'

import Head from 'next/head'
import Link from 'next/link'
import WeatherIcons from '../../components/WeatherIcons/WeatherIcons'
import SimpleChRoMap from '../../components/SimpleChRoMap/SimpleChRoMap'

const cities = [geneve, morges, lachaux, lausanne, sion, fribourg]

const ListCities = cities.map(city => {
  return (
    <div key={city.name}>
      <Link href={`/weather/${[city.slug]}`} as={`/weather/${[city.slug]}`}><h3>{city.name}</h3></Link>
      <WeatherIcons name='sun' height={25} width={25} />
      <span>14°</span>
    </div>
  )
})

export default function Home () {
  return (
    <div className='container'>
      <Head>
        <title>Météo - Région</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <h1>Météo - Région</h1>
      <div className='grid'>
        {ListCities}
      </div>
      <SimpleChRoMap />
    </div>
  )
}
