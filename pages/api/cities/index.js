import geneve from '../../../mocks/cities/geneve.json'
import bale from '../../../mocks/cities/bale.json'
import berne from '../../../mocks/cities/berne.json'
import zurich from '../../../mocks/cities/zurich.json'
import lausanne from '../../../mocks/cities/lausanne.json'
import fribourg from '../../../mocks/cities/fribourg.json'
import montreux from '../../../mocks/cities/montreux.json'
import sion from '../../../mocks/cities/sion.json'
import lachaux from '../../../mocks/cities/la-chaux-de-fonds.json'

const all = {
  geneve,
  bale,
  berne,
  zurich,
  lausanne,
  fribourg,
  montreux,
  sion,
  lachaux
}

export default (req, res) => {
  res.status(200).json({ ...all })
}
