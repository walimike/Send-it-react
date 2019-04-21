import configureMockStore from "redux-mock-store";
import thunk from "redux-thunk";
import moxios from "moxios";
import loginAction from "../../src/actions/loginAction";

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe("log in process", () => {
  beforeEach(function() {
    moxios.install();
  });

  afterEach(function() {
    moxios.uninstall();
  });

  it("logs in successfully", () => {
    const store = mockStore({});
    moxios.wait(() => {
      const requestM = moxios.requests.mostRecent();
      requestM.respondWith({
        status: 200,
        response: {
          access_token:
            "ABCDEFG",
          message: "successfully logged in",
          role: "user"
        }
      });
    });
    const expectedActions = [
      { type: "LOGIN_SUCCESS", payload: "ABCDEFG" }
    ];
    const valiData = {
      
        name: "jerry",
        password: "Roselyn123"
      
    };
    return store.dispatch(loginAction(valiData)).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  });

  it("retrieves a error message", () => {
    const store = mockStore({});
    moxios.wait(() => {
      const requests = moxios.requests.mostRecent();
      requests.respondWith({
        status: 404,
        response: {
            "message": "user does not exist, do you want to signup"
        }
      });
    });
    const expectedActions = [
      { type: "LOGIN_FAIL", payload: "User is invalid" }
    ];
    const invalidData = {
      
        name: "",
        password: ""
      
    };
    return store.dispatch(loginAction(invalidData)).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  });
});
