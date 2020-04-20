import geneve from '../../mocks/cities/geneve.json'
import morges from '../../mocks/cities/morges.json'
import lausanne from '../../mocks/cities/lausanne.json'
import sion from '../../mocks/cities/sion.json'
import styles from './ListCities.module.css'
import WeatherIcons from '../WeatherIcons/WeatherIcons'

const Cities = (geneve, morges, lausanne, sion)

const ListCities = () => {
  const { icon } = styles
  return (
    <div className='grid'>
      <div>
        <span>{geneve.name}</span>
        <WeatherIcons name={geneve.monday["12:00"].condition} width={25} />
        <div className='tempsavg'><span>{geneve.monday['12:00'].tempsavg}</span></div>
      </div>
      <div>
        <span>{morges.name}</span>
        <WeatherIcons name={morges.monday["12:00"].condition} width={25} />
        <div className='tempsavg'><span>{morges.monday['12:00'].tempsavg}</span></div>
      </div>
      <div>
        <span>{lausanne.name}</span>
        <WeatherIcons name={lausanne.monday["12:00"].condition} width={25} />
        <div className='tempsavg'><span>{lausanne.monday['12:00'].tempsavg}</span></div>
      </div>
      <div>
        <span>{sion.name}</span>
        <WeatherIcons name={sion.monday["12:00"].condition} width={25} />
        <div className='tempsavg'><span>{sion.monday['12:00'].tempsavg}</span></div>
      </div>
    </div>
  )
}

export default ListCities
