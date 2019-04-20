import React from "react";
import { shallow } from "enzyme";

import Footer from "../../src/components/landingPage/Footer";

describe("Footer", () => {
  it("should render without crashing", () => {
    const wrapper = shallow(<Footer />);
    expect(wrapper).toMatchSnapshot();
  });
});
