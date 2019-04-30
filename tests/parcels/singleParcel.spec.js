import React from 'react';
import { shallow } from 'enzyme';

import SingleParcel from '../../src/components/parcels/SingleParcel';

describe('single parcel', () => {
  const props = {
    redirectUser: jest.fn()
  }
  it('should render without crashing', () => {
    const wrapper = shallow(<SingleParcel />);
    expect(wrapper).toMatchSnapshot();
  });

});