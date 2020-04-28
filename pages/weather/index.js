import fetch from 'isomorphic-unfetch'

import Head from 'next/head'
import SimpleChRoMap from '../../components/SimpleChRoMap/SimpleChRoMap'
import ListCities from '../../components/ListCities/ListCities'

const PageTitle = 'Météo - Région'
export default function Home (props) {
  return (
    <div className='container'>
      <Head>
        <title>{PageTitle}</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <h1>{PageTitle}</h1>
      <article>{props.data.description.text}</article>
      <ListCities data={props.data.cities} />
      <SimpleChRoMap data={props.data.cities} />
    </div>
  )
}

export async function getServerSideProps () {
  const res = await fetch(process.env.feedEnv + '/cities/ro')
  const data = await res.json()
  return {
    props: {
      data
    }
  }
}
