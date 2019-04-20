import React from 'react';
import { shallow } from 'enzyme';

import SignupForm from "../../src/components/signUp/SignupForm";


describe('SignupForm', () => {
    it('should render without crashing', () => {
      const wrapper = shallow(<SignupForm />);
      expect(wrapper).toMatchSnapshot();
    });
  });