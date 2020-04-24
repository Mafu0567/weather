import { mount } from 'enzyme'
import ListCities from './ListCities'

describe('ListCities component', () => {
  const mountComponent = mount(<ListCities />)
  it('should render', () => {
    expect(mountComponent).toMatchSnapshot()
  })
})
