// Retourne array de [length] nombre de jours commençant par le jour "day"
function forecastCalculator (day, length) {
  const forecastDays = []
  for (let index = 0; index < length; index++) {
    if (day <= 6) {
      forecastDays.push(day)
      day++
    } else {
      day = 0
      forecastDays.push(day)
      day++
    }
  }
  return forecastDays
}

const OtherDaysWeather = props => {
  const date = new Date()
  const currentDay = date.getDay()
  const dayName = ['Dim', 'Lun', 'Mar', 'Mer', 'Jeu', 'Ven', 'Sam']
  const forecastDays = forecastCalculator(currentDay, 5)
  const forecast = { ...props.data }
  return (
    <ul className='grid'>
      {forecastDays.map(day => (
        <li key={day.toString()}>
          <h2>{dayName[day]}</h2>
          <span>{forecast[day].tempmin}° / {forecast[day].tempmax}°</span>
        </li>
      ))}
    </ul>
  )
}

export default OtherDaysWeather
