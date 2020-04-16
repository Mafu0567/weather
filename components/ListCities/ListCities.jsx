import Geneve from '../../mocks/cities/geneve.json'
import styles from './ListCities.module.css'

const ListCities = () => {
  const { listCities } = styles
  return (
    <div>
      <ul>
        <li className={listCities}>
          <h2>{Geneve.name}</h2>
          <div className="icone"><img src="/cloud.svg" alt="nuageux"/></div>
          <div className="TempMax"><span>{Geneve.now.TempAvg}</span></div>
          <div className="TempMin"><span>{Geneve.now.TempMin}</span></div>
          <div className="TempAvg"><span>{Geneve.now.TempMax}</span></div>
        </li>
      </ul>
    </div>
  )
}

export default ListCities