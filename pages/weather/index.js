import geneve from '../../mocks/cities/geneve.json'
import morges from '../../mocks/cities/morges.json'
import lausanne from '../../mocks/cities/lausanne.json'
import sion from '../../mocks/cities/sion.json'

import Head from 'next/head'
import ListCities from '../../components/ListCities/ListCities'
import SimpleChRoMap from '../../components/SimpleChRoMap/SimpleChRoMap'


export default function Home () {
  return (
    <div className='container'>
      <Head>
        <title>Météo</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <h1>Météo</h1>
      <input type='text' placeholder='Search..' />
      <ListCities />
      <SimpleChRoMap />
    </div>
  )
}
