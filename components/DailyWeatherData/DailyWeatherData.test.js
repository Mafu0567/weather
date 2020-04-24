import { mount } from 'enzyme'
import morges from '../../mocks/cities/morges.json'
import DailyWeatherData from './DailyWeatherData'

describe('DailyWeatherData component', () => {
  const mountComponent = mount(<DailyWeatherData data={morges} />)
  it('should render', () => {
    expect(mountComponent).toMatchSnapshot()
  })
})
