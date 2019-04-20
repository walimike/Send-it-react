import React from "react";
import { shallow } from "enzyme";

import Description from "../../src/components/landingPage/Description";


describe("Description", () => {
  it("should render without crashing", () => {
    const wrapper = shallow(<Description />);
    expect(wrapper).toMatchSnapshot();
  });
});