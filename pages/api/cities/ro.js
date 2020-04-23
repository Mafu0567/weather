import geneve from '../../../mocks/cities/geneve.json'
import lausanne from '../../../mocks/cities/lausanne.json'
import fribourg from '../../../mocks/cities/fribourg.json'
import morges from '../../../mocks/cities/morges.json'
import roDesc from '../../../mocks/description/ro.json'

const ro = {
  geneve,
  lausanne,
  fribourg,
  morges
}

export default (req, res) => {
  res.status(200).json({ cities: { ...ro }, description: roDesc })
}
