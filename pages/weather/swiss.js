import bale from '../../mocks/cities/bale.json'
import berne from '../../mocks/cities/berne.json'
import zurich from '../../mocks/cities/zurich.json'
import lausanne from '../../mocks/cities/lausanne.json'
import geneve from '../../mocks/cities/geneve.json'
import fribourg from '../../mocks/cities/fribourg.json'

import Head from 'next/head'
import Link from 'next/link'
import WeatherIcons from '../../components/WeatherIcons/WeatherIcons'
import SimpleChMap from '../../components/SimpleChMap/SimpleChMap'

const cities = [bale, berne, zurich, lausanne, geneve, fribourg]

const ListCities = cities.map(city => {
  return (
    <div key={city.name}>
      <Link href={`/weather/${[city.slug]}.js`} as={`/weather/${[city.slug]}`}><h3>{city.name}</h3></Link>
      <span>14°</span>
      <WeatherIcons name='sun' height={25} width={25} />
    </div>
  )
})

export default function Home () {
  return (
    <div className='container'>
      <Head>
        <title>Météo</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <h1>Météo</h1>
      <div className='grid'>
        {ListCities}
      </div>
      <SimpleChMap />
    </div>
  )
}
