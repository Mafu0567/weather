import { mount } from 'enzyme'
import SimpleChRoMap from './SimpleChRoMap'

describe('SimpleChRoMap component', async () => {
  const mountComponent = mount(<SimpleChRoMap />)
  it('should render', () => {
    expect(mountComponent).toMatchSnapshot()
  })
})
