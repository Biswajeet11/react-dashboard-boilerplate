import { LOAD_LITERALS } from "../actions/types";
import { LOCALES } from "../../localization/i8n";

const languageInitialState = { language: LOCALES.ENGLISH };
const setLanguageReducer = (state = languageInitialState, action) => {
  switch (action.type) {
    case LOAD_LITERALS:
      return { language: action.payload };
    default:
      return state;
  }
};

export default setLanguageReducer;
