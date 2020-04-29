import styles from './ListCities.module.css'
import Link from 'next/link'
import WeatherIcons from '../WeatherIcons/WeatherIcons'

const { card } = styles
const ListLink = ({ href, as, children }) => {
  return (
    <li className={card}>
      <Link href={href} as={as || href}>
        <a>{children}</a>
      </Link>
    </li>
  )
}
const ListCities = props => {
  const date = new Date()
  const day = date.getDay()
  const hour = date.getHours()
  const interval = (hour < 12) ? `0${hour - (hour % 3)}:00` : `${hour - (hour % 3)}:00`
  return (
    <ul className='grid'>
      {Object.entries({ ...props.data }).map(city => (
        <ListLink href='/weather/[city]' as={`/weather/${city[1].slug}`} key={city.toString()}>
          <div>
            <h2>{city[1].name}</h2>
            <WeatherIcons name={city[1].forecast[day].hourly[interval].condition} />
            <p>{city[1].forecast[day].tempmin} / {city[1].forecast[day].tempmax}</p>
          </div>
        </ListLink>
      ))}
    </ul>
  )
}

export default ListCities
