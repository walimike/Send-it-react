import React from "react";
import { shallow } from "enzyme";

import Header from "../../src/components/landingPage/Header";

describe("Header", () => {
  it("should render without crashing", () => {
    const wrapper = shallow(<Header />);
    expect(wrapper).toMatchSnapshot();
  });
});
