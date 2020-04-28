import geneve from '../../../mocks/cities/geneve.json'
import bale from '../../../mocks/cities/bale.json'
import berne from '../../../mocks/cities/berne.json'
import zurich from '../../../mocks/cities/zurich.json'
import lausanne from '../../../mocks/cities/lausanne.json'
import fribourg from '../../../mocks/cities/fribourg.json'
import montreux from '../../../mocks/cities/montreux.json'
import sion from '../../../mocks/cities/sion.json'
import lachaux from '../../../mocks/cities/la-chaux-de-fonds.json'

const cities = { geneve, bale, berne, zurich, lausanne, fribourg, montreux, sion, lachaux }

export default (req, res) => {
  const { query: { city } } = req
  if (cities[city]) {
    res.status(200).json(cities[city])
  } else {
    res.status(404).json({
      error: {
        title: 'Not found'
      }
    })
  }
}
