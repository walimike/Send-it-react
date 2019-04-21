import configureStore from 'redux-mock-store';
import React from 'react';
import { shallow, mount } from 'enzyme';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import moxios from 'moxios';

import LoginContainer, {
  LoginContainer as App,
} from "../../src/containers/LoginContainer";

describe('LoginContainer', () => {
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
    const wrapper = shallow(
      <Provider store={store}>
        <LoginContainer open={false} close={mockFn}  />
      </Provider>
    );
    expect(wrapper).toMatchSnapshot();
  });

  it('should render when state is updated', () => {
    const wrapper = mount(
      <Provider store={store}>
        <LoginContainer open={false} close={mockFn} />
      </Provider>
    );
    expect(wrapper.find('.modal').length).toEqual(1);
  });

  it('should call the login action', () => {
    const wrapper = shallow(<App open={false} close={mockFn} loginAction={mockFn} />);
    wrapper.setProps({ open: false, close: mockFn });

    const event = {
      preventDefault: mockFn,
      target: {
        elements: {
          name: {
            value: 'myname',
          },
          password: {
            value: 'Password1',
          },
        },
      },
    };
    wrapper.instance().handleSubmit(event);
  });

  it('pass next props',() => {
    const wrapper = shallow(<App open={false} close={mockFn} />);
    const nextProps = {token:'abcdefg'}
    wrapper.instance().componentWillReceiveProps(nextProps)
  });

  it('should call email',
    () => {
      const wrapper = shallow(<App open={false} close={mockFn} />);
      const nameEvent ={
          target:{value:''}
      }
      wrapper.instance().nameChange(nameEvent);
    });

    it('should call password',
    () => {
      const wrapper = shallow(<App open={false} close={mockFn} />);
      const passwordEvent ={
        target:{value:''}
    }
      wrapper.instance().passwordChange(passwordEvent);
    });
});