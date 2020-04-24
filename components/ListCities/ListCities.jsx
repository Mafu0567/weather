import Link from 'next/link'
import WeatherIcons from '../WeatherIcons/WeatherIcons'

const ListCities = props => {
  const cities = { ...props.data }
  const date = new Date()
  const day = date.getDay()
  return (
    <ul className='grid'>
      {Object.entries(cities).map(city => (
        <li key={city.toString()}>
          <Link href={`/weather/${city[1].slug}`}><h2>{city[1].name}</h2></Link>
          <WeatherIcons name='sun' />
          <span>{city[1].forecast[day].tempmin} / {city[1].forecast[day].tempmax}</span>
        </li>
      ))}
    </ul>
  )
}

export default ListCities
