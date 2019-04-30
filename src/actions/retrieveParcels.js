import axios from 'axios';


const retrieveProfileAction = () => {
  return dispatch => {
    return axios
      .get("https://wali-sendit.herokuapp.com/v2/api/users/parcels", {
        headers :{accept: "application/json",
        "content-type": "application/json",
        Authorization: `Bearer ${sessionStorage.getItem("token")}`
      }})
      .then(function(response) {
        const data = response.data.Parcel;
        console.log(data)
        dispatch({
          type: "RETRIEVE_PARCELS",
          payload: data,
        });
      })
  };
};

export default retrieveProfileAction;