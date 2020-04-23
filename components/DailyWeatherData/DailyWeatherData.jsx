import WeatherIcons from '../WeatherIcons/WeatherIcons'

const DailyWeatherData = props => {
  const date = new Date()
  const currentDay = date.getDay()
  const forecast = props.data.forecast
  return (
    <ul className='grid'>
      {Object.entries(forecast[currentDay].hourly).map(time => (
        <li key={time.toString()}>
          <h2>{time[0]}</h2>
          <span>{time[1].temp}</span>
          <WeatherIcons name={time[1].condition} />
        </li>
      ))}
    </ul>
  )
}

export default DailyWeatherData
