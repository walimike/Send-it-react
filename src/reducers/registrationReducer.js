const intialState = {
    error: null,
    successMsg: null,
    loading: false,
  };
  
  const registrationReducer = (state = intialState, action) => {
    switch (action.type) {
      case "SIGNUP_SUCCESS":
        return {
          ...state,
          loading: false,
          successMsg: action.payload,
        };
      case 'FAILED':
        return {
          ...state,
          loading: false,
          error: action.error,
        };
  
      default:
        return state;
    }
  };
  
export default registrationReducer;