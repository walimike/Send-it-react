
import React from 'react';
import { shallow } from 'enzyme';

import InnerNavbar from '../../src/components/landingPage/innerNavbar';

describe('innerNavbar', () => {
  const props = {
    redirectUser: jest.fn()
  }
  it('should render without crashing', () => {
    const wrapper = shallow(<InnerNavbar />);
    expect(wrapper).toMatchSnapshot();
  });

});