import React, { Component } from "react";
import NavBar from "../components/landingPage/NavBar";
import Header from "../components/landingPage/Header";
import Carousel from "../components/landingPage/Carousel";
import Footer from "../components/landingPage/Footer";
import Description from "../components/landingPage/Description";

import "../assets/styles/landing.scss";

class LandingPage extends Component {
  render() {
    return (
      <div>
        <Header/>
        <NavBar />
        <Carousel />
        <Description />
        <Footer/>
      </div>
    );
  }
}

export default LandingPage;
