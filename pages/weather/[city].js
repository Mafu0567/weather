/* Page design:
  - Header
  - CityName
  - CityWeatherView
  - DailyWeatherView for [city].json
*/

import DailyWeatherData from '../../components/DailyWeatherData/DailyWeatherData'

import Head from 'next/head'
import Error from 'next/error'
import fetch from 'node-fetch'

const CityPage = (props) => {
  if ('error' in props) return <Error {...props.error} />
  const { name } = props.data
  return (
    <div className='container'>
      <Head>
        <title>Météo - {name}</title>
      </Head>
      <h1>Météo - {name}</h1>
      <DailyWeatherData data={props.data} />
    </div>
  )
}

export async function getServerSideProps (context) {
  const { query } = context
  const city = query?.city
  const endpoint = process.env.feedEnv + '/cities/' + city
  const apiResponse = await fetch(endpoint)
  const json = await apiResponse.json()

  if (!('error' in json)) {
    return {
      props: {
        data: json
      }
    }
  } else {
    context.res.statusCode = apiResponse.status
    return {
      props: {
        error: {
          statusCode: apiResponse.status,
          title: json.error.title || 'error fetching'
        }
      }
    }
  }
}

export default CityPage
