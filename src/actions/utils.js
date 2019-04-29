export const authHeader = {
    headers: {
      'Authorization': 'Bearer ' + sessionStorage.token
    }
  };

const base = "https://wali-sendit.herokuapp.com/v2/api"

const endpoints = {
    login:`${base}/auth/login`,
    signup:`${base}/auth/signup`,
    parcel:`${base}/parcels`
}

export default endpoints;