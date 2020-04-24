import { mount } from 'enzyme'
import morges from '../../mocks/cities/morges.json'
import OtherDaysWeather from './OtherDaysWeather'

describe('OtherDaysWeather component', () => {
  const mountComponent = mount(<OtherDaysWeather data={morges} />)
  it('should render', () => {
    expect(mountComponent).toMatchSnapshot()
  })
})
