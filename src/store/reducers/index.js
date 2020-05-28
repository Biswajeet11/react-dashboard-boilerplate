import { combineReducers } from "redux";
import setLanguageReducer from "./language-reducer";

const rootReducer = () =>
  combineReducers({
    language: setLanguageReducer,
  });

export default rootReducer;
