import WeatherIcons from '../WeatherIcons/WeatherIcons'
import fetch from 'isomorphic-unfetch'
import useSWR from 'swr'

const fetcher = url => fetch(url).then(r => r.json())

const WeatherTeaser = () => {
  const { data, error } = useSWR('/api/city/lausanne', fetcher)
  if (error) return <div>échec du chargement</div>
  if (!data) return <div>chargement...</div>
  const date = new Date()
  const day = date.getDay()
  const hour = date.getHours()
  const interval = (hour < 12) ? `0${hour - (hour % 3)}:00` : `${hour - (hour % 3)}:00`
  const { forecast } = data
  return (
    <div className='teaser'>
      <WeatherIcons name={forecast[day].hourly[interval].condition} width={18} height={18} />
      <span>{forecast[day].tempmin}° / {forecast[day].tempmax}°</span>
    </div>
  )
}

export default WeatherTeaser
