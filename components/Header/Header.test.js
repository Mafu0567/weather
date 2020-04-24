import { shallow, mount } from 'enzyme'
import Header from './Header.jsx'

describe('Header component', () => {
  const mountComponent = mount(<Header />)
  const shallowComponent = shallow(<Header />)
  it('should have 3 link elements with direct "a" tags', () => {
    expect(mountComponent.find('Link > a')).toHaveLength(3)
  })

  it('should have 4 HeaderLink component', () => {
    expect(shallowComponent.find('Link > a')).toHaveLength(0) // shallow will not render child component
    expect(shallowComponent.find('HeaderLink')).toHaveLength(3)
  })

  it('should render', () => {
    expect(mountComponent).toMatchSnapshot()
  })
})
