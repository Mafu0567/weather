import { mount } from 'enzyme'
import geneve from '../../mocks/cities/geneve.json'
import DailyWeatherData from './DailyWeatherData'

describe('DailyWeatherData component', () => {
  const mountComponent = mount(<DailyWeatherData data={geneve} />)
  it('should render', () => {
    expect(mountComponent).toMatchSnapshot()
  })
})
