import { combineReducers } from "redux";
import registrationReducer from "./registrationReducer";
import loginReducer from './loginReducer';


export default combineReducers({
  registrationReducer,
  login: loginReducer
});