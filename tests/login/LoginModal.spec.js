import React from 'react';
import { shallow } from 'enzyme';

import LoginModal from '../../src/components/login/loginModal';

describe('LoginModal', () => {
  it('should render without crashing', () => {
    const wrapper = shallow(<LoginModal />);
    expect(wrapper).toMatchSnapshot();
  });
});
