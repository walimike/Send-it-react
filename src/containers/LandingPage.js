import React, { Component } from "react";
import NavBar from "../components/landingPage/NavBar";
import Header from "../components/landingPage/Header";
import Carousel from "../components/landingPage/Carousel";
import Footer from "../components/landingPage/Footer";
import Description from "../components/landingPage/Description";
import SignupContainer from "./SignupPage";

import "../assets/styles/landing.scss";

class LandingPage extends Component {
    
    constructor(props) {
      super(props);
      this.state = {
        open: false,
      };
    }
   
    onOpenModal = () => {
      this.setState({ open: true });
    };
  
    onCloseModal = () => {
      this.setState({ open: false });
    };
  render() {
    return (
      <div>
       <SignupContainer
        open = {this.state.open}
        close ={this.onCloseModal} />
        <Header
          openModal={this.onOpenModal}
        />
        <NavBar />
        <Carousel />
        <Description />
        <Footer/>
      </div>
    );
  }
}

export default LandingPage;
