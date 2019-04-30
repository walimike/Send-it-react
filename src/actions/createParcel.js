import axios from 'axios';
import endpoints, {authHeader} from "./utils";

import M from 'materialize-css/dist/js/materialize.js';

const headers = {
    'Authorization': 'Bearer ' + sessionStorage.token
  }

 const createParcelAction = Data => {
    return axios
      .post("https://wali-sendit.herokuapp.com/v2/api/parcels", Data, {
        headers :{accept: "application/json",
        "content-type": "application/json",
        Authorization: `Bearer ${sessionStorage.getItem("token")}`
      }})
      
      .then(function(data) {
          
        dispatch({
          type: "CREATE_PARCEL",
          payload: Data,
        });
        M.toast({html:"Order successfully added", classes:'green'
          });
      })
      .catch(function(err) {
        M.toast({html:"An error occured, you may need to re-authenticate", classes:'red'})
        console.log(err)
        dispatch({
          type: "CREATE_FAILURE",
          payload: err.message,
        });
      });
  };


 export default createParcelAction;