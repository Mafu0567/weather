import { mount } from 'enzyme'
import WeatherIcons from './WeatherIcons'

describe('WeatherIcons sun', () => {
  const mountsun = mount(<WeatherIcons name='sun' />)
  it('should render a sun', () => {
    expect(mountsun).toMatchSnapshot()
  })
})

describe('WeatherIcons cloud', () => {
  const mountcloud = mount(<WeatherIcons name='cloud' />)
  it('should render a cloud', () => {
    expect(mountcloud).toMatchSnapshot()
  })
})

describe('WeatherIcons rain', () => {
  const mountrain = mount(<WeatherIcons name='rain' />)
  it('should render a rain', () => {
    expect(mountrain).toMatchSnapshot()
  })
})
