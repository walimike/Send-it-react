import React from 'react';
import { shallow } from 'enzyme';

import HomeContainer from '../../src/containers/HomeContainer';

describe('Home Container', () => {
  const props = {
    redirectUser: jest.fn()
  }
  it('should render without crashing', () => {
    const wrapper = shallow(<HomeContainer />);
    expect(wrapper).toMatchSnapshot();
  });

  it('should call logout', () => {
    const wrapper = shallow(<HomeContainer />);
    wrapper.instance().logout()
  })

});