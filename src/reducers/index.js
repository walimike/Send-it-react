import { combineReducers } from "redux";
import registrationReducer from "./registrationReducer";
import loginReducer from './loginReducer';
import {createParcel} from './parcelsReducer';



export default combineReducers({
  registrationReducer,
  login: loginReducer,
  createParcel
});