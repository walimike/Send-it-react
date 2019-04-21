import axios from 'axios';

import M from 'materialize-css/dist/js/materialize.js';


 const loginAction = loginData => {
  
  return dispatch => {
    return axios
      .post("https://wali-sendit.herokuapp.com/v2/api/auth/login", loginData)
      .then(function(response) {
        M.toast({html:response.data.message, classes:'green'
      });
        dispatch({
          type: "LOGIN_SUCCESS",
          payload: response.data.access_token,
        });
      })
      .catch(function(err) {
        M.toast({html:"User is invalid", classes:'red'})
        console.log(err)
        dispatch({
          type: "LOGIN_FAIL",
          payload: "User is invalid",
        });
      });
  };
};

 export default loginAction;