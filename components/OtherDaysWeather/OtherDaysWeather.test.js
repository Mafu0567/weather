import { mount } from 'enzyme'
import montreux from '../../mocks/cities/montreux.json'
import OtherDaysWeather from './OtherDaysWeather'

const { forecast } = montreux

describe('OtherDaysWeather component', () => {
  const mountComponent = mount(<OtherDaysWeather data={forecast} />)
  it('should render', () => {
    expect(mountComponent).toMatchSnapshot()
  })
})
