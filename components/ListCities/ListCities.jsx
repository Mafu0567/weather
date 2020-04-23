import Link from 'next/link'

const ListCities = props => {
  const cities = { ...props.data }
  return (
    <ul className='grid'>
      {Object.entries(cities).map(city => (
        <li key={city.toString()}>
          <Link href={`/weather/${city[1].slug}`}><h2>{city[1].name}</h2></Link>
        </li>
      ))}
    </ul>
  )
}

export default ListCities
