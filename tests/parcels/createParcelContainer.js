import configureStore from 'redux-mock-store';
import React from 'react';
import { shallow, mount } from 'enzyme';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import moxios from 'moxios';

import CreateParcelContainer, {
    CreateParcelContainer as App, mapStateToProps
} from '../../src/containers/Login/Login';

describe('Create Parcel Container', () => {
  const initialState = {
    login: { isSuccesfull: false, token: '', errors: null },
  };

  const mockFn = jest.fn();
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
    const wrapper = mount(
      <Provider store={store}>
        <CreateParcelContainer  />
      </Provider>
    );
    expect(wrapper).toMatchSnapshot();
  });

  it('should handle state change', () => {
    const wrapper = shallow(
      <App />
    );
    wrapper.setProps({ 
        "source":"",
            "destination":"",
            "price":3000,
            "parcel_name" :""
    });
    const event = {
        preventDefault: mockFn,
        target: {
          elements: {
            email: {
              value: 'books',
            }
          },
        },
      };
      expectedState = {
        "source":"",
        "destination":"",
        "price":3000,
        "parcel_name" :"books"
      }
      wrapper.instance().parcelNameChange(event);
      expect(wrapper.instance().state.toEqual(expectedState)
  });

  it('should call create parcelsd', () => {
    const wrapper = shallow(
      <App />
    );
    wrapper.setProps({ 
        "source":"",
            "destination":"",
            "price":3000,
            "parcel_name" :""
    });
    const event = {
        preventDefault: mockFn,
        target: {
          elements: {
            email: {
              value: 'books',
            }
          },
        },
      };
      expectedState = {
        "source":"",
        "destination":"",
        "price":3000,
        "parcel_name" :"books"
      }
      wrapper.instance().createParcels(event);
    //   expect(wrapper.instance().state.toEqual(expectedState);
  });
});