import React from 'react';
import { shallow } from 'enzyme';

import App from '../src/containers/App';

describe('App', () => {
  it('should render without crashing', () => {
    const wrapper = shallow(<App />);
    expect(wrapper).toMatchSnapshot();
  });
});

