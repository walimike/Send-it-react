import React from "react";
import { shallow } from "enzyme";

import LandingPage from "../../src/containers/LandingPage";

describe("NavBar", () => {
  it("should render without crashing", () => {
    const wrapper = shallow(<LandingPage />);
    expect(wrapper).toMatchSnapshot();
  });
});
