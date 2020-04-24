import styles from './ListCities.module.css'
import Link from 'next/link'
import WeatherIcons from '../WeatherIcons/WeatherIcons'

const ListCities = props => {
  const { card } = styles
  const cities = { ...props.data }
  const date = new Date()
  const day = date.getDay()
  return (
    <ul className='grid'>
      {Object.entries(cities).map(city => (
        <li className={card} key={city.toString()}>
          <Link href={`/weather/${city[1].slug}`} as={`/weather/${city[1].slug}`}>
            <a className={card}>
              <div>
                <h2>{city[1].name}</h2>
                <WeatherIcons name='sun' />
                <p>{city[1].forecast[day].tempmin} / {city[1].forecast[day].tempmax}</p>
              </div>
            </a>
          </Link>
        </li>
      ))}
    </ul>
  )
}

export default ListCities
