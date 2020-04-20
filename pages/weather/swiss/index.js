import Head from 'next/head'
import ListCities from '../../../components/ListCities/ListCities'
import SimpleChMap from '../../../components/SimpleChMap/SimpleChMap'

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
      <SimpleChMap />
    </div>
  )
}
