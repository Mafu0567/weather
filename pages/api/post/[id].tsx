import post1 from '../../../mocks/post/1.json'
import post2 from '../../../mocks/post/2.json'

export default (req, res) => {
  const { query: { id } } = req
  let mocks
  let status = 200

  switch (id) {
    case '1':
      mocks = post1
      break

    case '2':
      mocks = post2
      break

    default:
      status = 404
      mocks = {
        error: {
          title: 'not found'
        }
      }
  }
  res.status(status).json(mocks)
}
