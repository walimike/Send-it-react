import React, { Component } from 'react';
import { connect } from 'react-redux';

import LoginModal from "../components/login/loginModal";
import loginAction from "../actions/loginAction";

import "../assets/styles/modal.scss";

 export class LoginContainer extends Component {
    constructor(props){
        super(props);
        this.state = {
            name:'',
            password:'',
            isLoading:false
        }
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps){
            this.setState({isLoading:false})
            if (nextProps.token) {
            sessionStorage.setItem('token', nextProps.token);
            setTimeout(() => window.location.replace('/home'), 100);
        }}
      }

    nameChange = (event) => this.setState({name: event.target.value});
    passwordChange = (event) => this.setState({password: event.target.value});

     handleSubmit = (event) => {
        event.preventDefault();
        this.setState({isLoading: true})
        this.logIn()
    }

    logIn = () => {
        const { loginAction } = this.props;
        const loginData = {
            name:this.state.name,
            password:this.state.password
        }
        loginAction(loginData);
    }

   render() {

     const {open} = this.props;
    const {close} = this.props;

     return (
      <LoginModal
      open = {open}
      close = {close}
      name={this.state.name}
      password={this.state.password}
      nameChange = {this.nameChange}
      passwordChange = {this.passwordChange}
      handleSubmit = {this.handleSubmit}
      isLoading = {this.state.isLoading}
       />
    )
  }
}


 LoginContainer.defaultProps = {
    token: '',
    errors: {},
  };

 const mapStateToProps = state => ({
    token: state.login.token,
    errors: state.login.errors,
    isSuccessful: state.login.isSuccessful,
  });

 export default connect(mapStateToProps, { loginAction })(LoginContainer);