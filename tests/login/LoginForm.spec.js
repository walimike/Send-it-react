import React from 'react';
import { shallow } from 'enzyme';

import LoginForm from '../../src/components/login/loginForm';

describe('LoginForm', () => {
  it('should render without crashing', () => {
    const wrapper = shallow(<LoginForm />);
    expect(wrapper).toMatchSnapshot();
  });
});