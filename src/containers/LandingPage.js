import React, { Component } from 'react';

import SignupContainer from "../containers/SignupPage";
import LoginContainer from '../containers/LoginContainer';
import NavBar from '../components/landingPage/NavBar';
import Header from '../components/landingPage/Header';
import Carousel from '../components/landingPage/Carousel';
import Footer from '../components/landingPage/Footer';
import Description from "../components/landingPage/Description";

import "../assets/styles/landing.scss";


class LandingPage extends Component {
  state = {
    openLogIn: false,
    openSignUp: false
  };
 
  openSignUp = () => {
    this.setState({ openSignUp: true });
  };

  openLogIn = () => {
    this.setState({ openLogIn: true });
  };
  
  closeSignUp = () => {
    this.setState({ openSignUp: false });
  };

  closeLogIn = () => {
    this.setState({ openLogIn: false });
  };

  render() {
    
    return (
      <div>
        <SignupContainer
        open = {this.state.openSignUp}
        close ={this.closeSignUp} />
        <LoginContainer 
          open = {this.state.openLogIn}
          close = {this.closeLogIn}
        />
        <Header 
          openSignUp={this.openSignUp}
          openLogIn = {this.openLogIn}
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
