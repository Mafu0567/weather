import { mount } from 'enzyme'
import montreux from '../../mocks/cities/montreux.json'
import DailyWeatherData from './DailyWeatherData'

const { forecast } = montreux

describe('DailyWeatherData component', () => {
  const mountComponent = mount(<DailyWeatherData data={forecast} />)
  it('should render', () => {
    expect(mountComponent).toMatchSnapshot()
  })
})
