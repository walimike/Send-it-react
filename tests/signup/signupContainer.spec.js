import configureStore from 'redux-mock-store';
import React from 'react';
import { shallow, mount } from 'enzyme';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import moxios from 'moxios';

import SignupContainer, {
  SignupContainer as App,
} from "../../src/containers/SignupPage";

describe('SignupContainer', () => {
  const initialState = {
    registrationReducer: {
        error: null,
        successMsg: null,
        loading: false,
      },
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
        <SignupContainer open={false} close={mockFn}  />
      </Provider>
    );
    expect(wrapper).toMatchSnapshot();
  });

  it('Should call submit handler', () =>{
    const wrapper = shallow(<App open={false} close={mockFn} SignupAction={mockFn} loading={false}/>);
    wrapper.setProps({ open: false, close: mockFn });

    const event = {
      preventDefault: mockFn,
      target: {
        elements: {
            name:{
                value:"test"
            },
          email: {
            value: 'testemail@mail.com',
          },
          password: {
            value: 'Password1',
          },
          role:{
              value:"user"
          },
        },
      },
    };
    wrapper.instance().submitHandler(event);
  });

  it("should call inputhandler", () => {
    const wrapper = shallow(<App open={false} close={mockFn} SignupAction={mockFn} loading={false}/>);
    const event = {
        preventDefault: mockFn,
        target: {
            elements: {
                name:{
                    value:"test"
                }}}
    }
    wrapper.instance().inputHandler(event)
  });

  it("should have the same password", () =>{
    const wrapper = shallow(<App open={false} close={mockFn} SignupAction={mockFn} loading={false}/>);
    const event = {
        preventDefault: mockFn,
        target: {
            elements: {
                name:{
                    value:"test"
                }}}
    }
    wrapper.instance().setState({
      password: 'ABCDEFG',
      password2: 'HIJKLMN',
    });
    wrapper.instance().submitHandler(event)
  });

  it('access mapStateToProps', () => {
    const newProps = {
      open: true,
      close: jest.fn(),
      SignupAction: jest.fn(),
      inputHandler: jest.fn(),
      submitHandler: jest.fn(),
      password: '123445678Aa',
      email: 'example@gmail.com',
      username: 'Cucumber',
    };
   mount(<Provider store={store}><SignupContainer {...newProps} /></Provider>);

  });

});