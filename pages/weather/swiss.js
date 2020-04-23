import fetch from 'isomorphic-unfetch'

import Head from 'next/head'
import SimpleChMap from '../../components/SimpleChMap/SimpleChMap'
import ListCities from '../../components/ListCities/ListCities'

export default function Home (props) {
  return (
    <div className='container'>
      <Head>
        <title>Météo - Région</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <h1>Météo - Région</h1>
      <ListCities data={props.data} />
      <SimpleChMap />
    </div>
  )
}

export async function getServerSideProps () {
  const res = await fetch(process.env.feedEnv + '/cities/ch')
  const data = await res.json()
  return {
    props: {
      data
    }
  }
}
