import { mount } from 'enzyme'
import WeatherTeaser from './WeatherTeaser'

describe('WeatherTeaser component', () => {
  const mountComponent = mount(<WeatherTeaser />)
  it('should render', () => {
    expect(mountComponent).toMatchSnapshot()
  })
})
