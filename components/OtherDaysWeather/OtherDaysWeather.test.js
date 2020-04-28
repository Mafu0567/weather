import { mount } from 'enzyme'
import geneve from '../../mocks/cities/geneve.json'
import OtherDaysWeather from './OtherDaysWeather'

describe('OtherDaysWeather component', () => {
  const mountComponent = mount(<OtherDaysWeather data={geneve} />)
  it('should render', () => {
    expect(mountComponent).toMatchSnapshot()
  })
})
