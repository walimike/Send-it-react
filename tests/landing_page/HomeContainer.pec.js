import configureStore from 'redux-mock-store';
import React from 'react';
import { shallow, mount } from 'enzyme';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import moxios from 'moxios';

import HomeContainer from "../../src/containers/HomeContainer";

describe('HomeContainer', () => {
  const initialState = {
    login: { isSuccesfull: false, token: '', errors: null },
  };

  const mockStore = configureStore([thunk]);
  let store;

  beforeEach(() => {
    store = mockStore(initialState);
    moxios.install();
  });

  afterEach(function() {
    moxios.uninstall();
  });

  it('should render without crashing', () => {
    const wrapper = shallow(
      <Provider store={store}>
        <HomeContainer />
      </Provider>
    );