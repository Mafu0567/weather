import Geneve from '../../mocks/cities/geneve.json'



const ListCities = () => {
  return (
    <ul>
        <li>
          <h2>{Geneve.name}</h2>
          <div className="icone"><img src="/cloud.svg" alt="nuageux"/></div>
          <div className="degMin"><span>13°</span></div>
          <div className="degMax"><span>13°</span></div>
          <div className="degMoyen"><span>13°</span></div>
        </li>
      </ul>
  )
}

export default ListCities