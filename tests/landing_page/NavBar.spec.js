import React from "react";
import { shallow } from "enzyme";

import NavBar from "../../src/components/landingPage/NavBar";

describe("NavBar", () => {
  it("should render without crashing", () => {
    const wrapper = shallow(<NavBar />);
    expect(wrapper).toMatchSnapshot();
  });
});
