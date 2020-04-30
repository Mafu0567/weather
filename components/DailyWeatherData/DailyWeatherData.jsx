import WeatherIcons from '../WeatherIcons/WeatherIcons'

const DailyWeatherData = props => {
  const date = new Date()
  const currentDay = date.getDay()
  const forecast = { ...props.data }
  return (
    <ul className='grid'>
      {Object.entries(forecast[currentDay].hourly).map(time => (
        <li key={time.toString()}>
          <h2>{time[0]}</h2>
          <WeatherIcons name={time[1].condition} width={25} height={25} />
          <span>{time[1].temp}°</span>
        </li>
      ))}
    </ul>
  )
}

export default DailyWeatherData
