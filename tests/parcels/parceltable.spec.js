
import React from 'react';
import { shallow } from 'enzyme';

import ParcelTable from '../../src/components/parcels/Parceltable';

describe('parcel table', () => {
  const props = {
    redirectUser: jest.fn()
  }
  it('should render without crashing', () => {
    const wrapper = shallow(<ParcelTable />);
    expect(wrapper).toMatchSnapshot();
  });

});