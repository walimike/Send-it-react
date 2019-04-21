const initialState = {
    isSuccessful: false,
    token: '',
    errors: null
  };


const loginReducer = (state=initialState,action) => {
  switch(action.type){
    case "LOGIN_SUCCESS":
        return {
            ...state,
            isSuccessful:true,
            token:action.payload
        };
    case "LOGIN_FAIL":
        return {
            ...state,
            errors:action.payload
        };
    default:
        return state;
  }
}

export default loginReducer;