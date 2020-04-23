import geneve from '../../../mocks/cities/geneve.json'
import lausanne from '../../../mocks/cities/lausanne.json'
import fribourg from '../../../mocks/cities/fribourg.json'
import morges from '../../../mocks/cities/morges.json'
import sion from '../../../mocks/cities/sion.json'
import lachaux from '../../../mocks/cities/la-chaux-de-fonds.json'

const ro = {
  geneve,
  lausanne,
  fribourg,
  morges,
  sion,
  lachaux
}

export default (req, res) => {
  res.status(200).json({ ...ro })
}
