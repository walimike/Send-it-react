
import React from 'react';
import { shallow } from 'enzyme';

import CreateParcel from '../../src/components/parcels/CreateParcel';

describe('CreateParcel', () => {
  const props = {
    redirectUser: jest.fn()
  }
  it('should render without crashing', () => {
    const wrapper = shallow(<CreateParcel />);
    expect(wrapper).toMatchSnapshot();
  });

});