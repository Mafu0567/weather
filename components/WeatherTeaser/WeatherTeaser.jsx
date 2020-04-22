import WeatherIcons from '../WeatherIcons/WeatherIcons'

const WeatherTeaser = () => {
  return (
    <div className='teaser'>
      <WeatherIcons name='sun' />
      <span>13° / 19°</span>
    </div>
  )
}

export default WeatherTeaser
