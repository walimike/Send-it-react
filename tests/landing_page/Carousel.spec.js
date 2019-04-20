import React from "react";
import { shallow } from "enzyme";

import Carousel from "../../src/components/landingPage/Carousel";


describe("Carousel", () => {
  it("should render without crashing", () => {
    const wrapper = shallow(<Carousel />);
    expect(wrapper).toMatchSnapshot();
  });
});
