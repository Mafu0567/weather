import { mount } from 'enzyme'
import montreux from '../../mocks/cities/montreux.json'
import OtherDaysWeather from './OtherDaysWeather'

describe('OtherDaysWeather component', () => {
  const mountComponent = mount(<OtherDaysWeather data={montreux} />)
  it('should render', () => {
    expect(mountComponent).toMatchSnapshot()
  })
})
