import {SignupAction} from "../../src/actions/SignUpAction";

import configureMockStore from "redux-mock-store";
import thunk from "redux-thunk";
import moxios from "moxios";

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe("signup process", () => {
  beforeEach(function() {
    moxios.install();
  });

  afterEach(function() {
    moxios.uninstall();
  });

  it("signs up successfully", () => {
    const store = mockStore({});
    moxios.wait(() => {
      const requestM = moxios.requests.mostRecent();
      requestM.respondWith({
        status: 200,
        response: { message: "you have successfully signed up as volongoto" }
      });
    });
    const expectedActions = [
      {
        type: "SIGNUP_SUCCESS",
        payload: "you have successfully signed up as volongoto"
      }
    ];
    const valiData = {
      name: "volongoto",
      email: "wali@email.com",
      password: "Roselyn123",
      role: "user"
    };
    return store.dispatch(SignupAction(valiData)).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  });

  it("retrieves a error message", () => {
    const store = mockStore({});
    moxios.wait(() => {
      const requests = moxios.requests.mostRecent();
      requests.respondWith({
        status: 404,
        response: { message: "an error occured" }
      });
    });
    const expectedActions = [
      { type: "SIGNUP_FAILURE", error: "an error occured" }
    ];
    const invalidData = {
        name: "volongoto",
        email: "waliemail.com",
        password: "Roselyn123",
        role: "user"
      };
    return store.dispatch(SignupAction(invalidData)).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  });
});
