import geneve from '../../../mocks/cities/geneve.json'
import bale from '../../../mocks/cities/bale.json'
import berne from '../../../mocks/cities/berne.json'
import zurich from '../../../mocks/cities/zurich.json'
import lausanne from '../../../mocks/cities/lausanne.json'

const ch = {
  geneve,
  bale,
  berne,
  zurich,
  lausanne
}

export default (req, res) => {
  res.status(200).json({ ...ch })
}
