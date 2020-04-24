import { mount } from 'enzyme'
import montreux from '../../mocks/cities/montreux.json'
import DailyWeatherData from './DailyWeatherData'

describe('DailyWeatherData component', () => {
  const mountComponent = mount(<DailyWeatherData data={montreux} />)
  it('should render', () => {
    expect(mountComponent).toMatchSnapshot()
  })
})
