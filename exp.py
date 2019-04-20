import configureStore from "redux-mock-store";
import React from "react";
import { shallow, mount } from "enzyme";
import thunk from "redux-thunk";
import { Provider } from "react-redux";
import moxios from "moxios";

import SignupContainer, {
  SignupContainer as App
} from "../../src/containers/Login/Login";

describe("SignupContainer", () => {
  const initialState = {
    registrationReducer: { error: null, successMsg: null, loading: false }
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

  it("should render without crashing", () => {
    const wrapper = shallow(
      <Provider store={store}>
        <SignupContainer open={false} close={mockFn} />
      </Provider>
    );
    expect(wrapper).toMatchSnapshot();
  });

  it("should render when state is updated", () => {
    const wrapper = mount(
      <Provider store={store}>
        <SignupContainer open={false} close={mockFn} />
      </Provider>
    );
    expect(wrapper.find(".modal").length).toEqual(1);
  });

  it("should call the signup action", () => {
    const wrapper = shallow(
      <App open={false} close={mockFn} signupAction={mockFn} />
    );
    wrapper.setProps({ open: false, close: mockFn });

    const event = {
      preventDefault: mockFn,
      target: {
        elements: {
          email: {
            value: "testemail@mail.com"
          },
          password: {
            value: "Password1"
          }
        }
      }
    };
    wrapper.instance().handleSubmit(event);
  });

  it("pass next props", () => {
    const wrapper = shallow(<App open={false} close={mockFn} />);
    const nextProps = { token: "abcdefg" };
    wrapper.instance().componentWillReceiveProps(nextProps);
  });

  it("should call email", () => {
    const wrapper = shallow(<App open={false} close={mockFn} />);
    const emailEvent = {
      target: { value: "" }
    };
    wrapper.instance().emailChange(emailEvent);
  });

  it("should call password", () => {
    const wrapper = shallow(<App open={false} close={mockFn} />);
    const passwordEvent = {
      target: { value: "" }
    };
    wrapper.instance().passwordChange(passwordEvent);
  });
});
