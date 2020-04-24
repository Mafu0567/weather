import { mount } from 'enzyme'
import SimpleChRoMap from './SimpleChRoMap'

describe('SimpleChRoMap component', () => {
  const mountComponent = mount(<SimpleChRoMap />)
  it('should render', () => {
    expect(mountComponent).toMatchSnapshot()
  })
})
