import React, { Component } from 'react';
import { connect } from 'react-redux';
import M from 'materialize-css/dist/js/materialize.js';
import { SignupAction } from "../actions/SignUpAction";
import SignUpModal from "../components/signUp/SignupModal";

import "../assets/styles/modal.scss";

export class SignupContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      email: '',
      password: '',
      password2: ''
    };
  }

  inputHandler = e => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  submitHandler = e => {
    e.preventDefault();
    if (this.state.password == this.state.password2) {
      const data = {
          role: "user",
          name: this.state.username,
          email: this.state.email,
          password: this.state.password,
      };
      this.props.SignupAction(data);
    } else {
      M.toast({html: 'Passwords donot match', classes: 'red' });

    }
  };


  render() {
    const { SignupAction,
            open,
            close } = this.props;

    return (
      <div className="container">
        <SignUpModal
          open ={open}
          close = {close}
          submitHandler = {this.submitHandler}
          inputHandler={this.inputHandler}
          password={this.state.password}
          email={this.state.email}
          username={this.state.username}
          SignupAction= {SignupAction}
          isLoading={this.props.loading}

          
        />
      </div>
    );
  }
}


export const mapStateToProps = (state) => {
  return { loading: state.registrationReducer.loading }
}


export default connect(
  mapStateToProps,
  { SignupAction }
)(SignupContainer);