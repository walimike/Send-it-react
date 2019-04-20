import React from 'react';
import { shallow } from 'enzyme';

import SignUpModal from "../../src/components/signUp/SignupModal";

describe('SignUpModal', () => {
  it('should render without crashing', () => {
    const wrapper = shallow(<SignUpModal />);
    expect(wrapper).toMatchSnapshot();
  });
});