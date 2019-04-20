import React from "react";
import { shallow } from "enzyme";

import LandingPage from "../../src/containers/LandingPage";

describe("NavBar", () => {
  it("should render without crashing", () => {
    const wrapper = shallow(<LandingPage />);
    expect(wrapper).toMatchSnapshot();
  });

  it("should open modal", () => {
    const wrapper = shallow(<LandingPage />);
    wrapper.instance().onOpenModal()
    const expectedState = { open: true }
    expect(wrapper.instance().state).toEqual(expectedState);
  });

  it("should close modal", () => {
    const wrapper = shallow(<LandingPage />);
    wrapper.instance().onCloseModal()
    const expectedState = { open: false }
    expect(wrapper.instance().state).toEqual(expectedState);
  });
});
