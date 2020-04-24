import { mount } from 'enzyme'
import SimpleChMap from './SimpleChMap'

describe('SimpleChMap component', () => {
  const mountComponent = mount(<SimpleChMap />)
  it('should render', () => {
    expect(mountComponent).toMatchSnapshot()
  })
})
