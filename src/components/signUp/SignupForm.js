import React from "react";

const SignupForm = props => {
  let Loader = require('react-loader')
  return (
    <div className="row">
      <div className="col s12 15 offset-12">
        <h4 className="center-align regHeader">REGISTER</h4>
        <form onSubmit={props.onSubmit} id="signUpForm" className="form">
          <div className="input-field">
            <input
              type="text"
              id="username"
              name="username"
              value={props.username}
              onChange={props.onChange}
              className="formInput"
              required
            />
            <label className="active" htmlFor="username">
              Username
            </label>
          </div>

          <div className="input-field">
            <label className="active" htmlFor="email">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={props.email}
              onChange={props.onChange}
              className="formInput"
              required
            />
          </div>

          <div className="input-field">
            <label className="active" htmlFor="password">
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              value={props.password}
              onChange={props.onChange}
              className="formInput"
              required
            />
          </div>

          <div className="input-field">
            <label className="active" htmlFor="password2">
              Confirm Password 
            </label>
            <input
              type="password"
              id="password2"
              name="password2"
              value={props.password2}
              onChange={props.onChange}
              required
            />
          </div>

          <div className="input-field center">
            <Loader loaded={!props.isLoading}>
              <button type="submit" className="waves-effect waves-light btn-small regButton">
                Register
              </button>
            </Loader>
          </div>
         
        </form>
      </div>
    
    </div>
  );
};

export default SignupForm;