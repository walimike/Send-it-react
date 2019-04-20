import axios from 'axios';
import M from 'materialize-css/dist/js/materialize.js';


export const SignupAction = userData => {
  return dispatch => {
    return axios
      .post("https://wali-sendit.herokuapp.com/v2/api/auth/signup",
            userData )
      .then(function(response) {
        dispatch({
          type: 'SIGNUP_SUCCESS',
          payload: response.data.message,
        });
        M.toast({html:response.data.message, classes:'green'});
      })
      .catch(function(err) {
        const error = err.response.data.message;
        M.toast({html:error, classes:'red'})
        dispatch({
          type: "SIGNUP_FAILURE",
          error: error,
        });
      });
  };
};