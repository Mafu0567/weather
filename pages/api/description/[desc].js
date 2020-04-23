import ro from '../../../mocks/description/ro.json'
import zu from '../../../mocks/description/zu.json'

const descs = { ro, zu }

export default (req, res) => {
  const { query: { desc } } = req
  if (descs[desc]) {
    res.status(200).json(descs[desc])
  } else {
    res.status(404).json({
      error: {
        title: 'Not found'
      }
    })
  }
}
