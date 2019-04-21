import React from 'react';


 const LoginForm = (props) => {

     const { 
        name, 
        password,
        nameChange,
        passwordChange,
        handleSubmit,
        isLoading
    } = props;

     let Loader = require('react-loader');
    return (
      <div>
        <div className="formInput">
        <Loader loaded={!isLoading}></Loader>
         <form onSubmit={handleSubmit}>
            <div className="input- col s12">
            <label className="active" htmlFor="username">
                Username
                </label>
                <input
                type="text"
                id="username"
                name="username"
                value={name}
                onChange={nameChange}
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
              value={password}
              onChange={passwordChange}
              className="formInput"
              required
            />
          </div>
            
            <input type="submit" value="Login"
                className="waves-effect waves-light btn-small login"
                onClick = {handleSubmit}
                />
        </form>
        </div>
      </div>
    )
}

 export default LoginForm;
   
