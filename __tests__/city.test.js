import { getServerSideProps } from '../pages/weather/[city]'

describe('CityPage getServerSideProps', () => {
  it('should return data and staticData', async () => {
    const feedMock = { api: 'data' }
    fetchMock.mockOnce(JSON.stringify(feedMock))

    const context = { query: { city: 'morges' } }
    const result = await getServerSideProps(context)

    expect(result).toHaveProperty('props.data', feedMock)
  })
})
