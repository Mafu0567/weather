import WeatherIcons from "../WeatherIcons/WeatherIcons"

const ListCities = list = list.map(city => {
  return (
    <div key={city.name}>
      <h2>{city.name}</h2>
    </div>
  )
})

export default ListCities
