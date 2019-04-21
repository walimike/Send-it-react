import React from "react";
import { shallow } from "enzyme";

import LandingPage from "../../src/containers/LandingPage";

describe("NavBar", () => {
  it("should render without crashing", () => {
    const wrapper = shallow(<LandingPage />);
    expect(wrapper).toMatchSnapshot();
  });

  it("should open signup", () => {
    const wrapper = shallow(<LandingPage />);
    wrapper.instance().openSignUp()
    const expectedState = { openLogIn: false, openSignUp: true }
    expect(wrapper.instance().state).toEqual(expectedState);
  });

  it("should close signup", () => {
    const wrapper = shallow(<LandingPage />);
    wrapper.instance().closeSignUp()
    const expectedState = {openLogIn: false, openSignUp: false }
    expect(wrapper.instance().state).toEqual(expectedState);
  });

  it("should open login", () => {
    const wrapper = shallow(<LandingPage />);
    wrapper.instance().openLogIn()
    const expectedState = { openLogIn: true, openSignUp: false  }
    expect(wrapper.instance().state).toEqual(expectedState);
  });

  it("should close login", () => {
    const wrapper = shallow(<LandingPage />);
    wrapper.instance().closeLogIn()
    const expectedState = { openLogIn: false, openSignUp: false  }
    expect(wrapper.instance().state).toEqual(expectedState);
  });
});
