
import React from 'react';
import { shallow, mount } from 'enzyme';
import moxios from 'moxios';

import RetrieveParcels from '../../src/containers/RetrieveParcels';

describe('Retrieve Parcel Container', () => {
  

  it('should render without crashing', () => {
    const wrapper = shallow(
        <RetrieveParcels />
    );
    expect(wrapper).toMatchSnapshot();
  });

  it('should render mount', () => {
    const wrapper = shallow(
        <RetrieveParcels />
    );
    wrapper.instance().setState({parcels:[{},{}]})
  });
})