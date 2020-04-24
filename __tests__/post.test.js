import { getServerSideProps } from '../pages/post/[id]'

describe('PostPage getServerSideProps', () => {
  it('should return data and staticData', async () => {
    const feedMock = { api: 'data' }
    fetchMock.mockOnce(JSON.stringify(feedMock))

    const context = { query: { id: '1' } }
    const result = await getServerSideProps(context)

    expect(result).toHaveProperty('props.staticData', 'hello world')
    expect(result).toHaveProperty('props.data', feedMock)
  })
})
