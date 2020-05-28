import { LOAD_LITERALS } from "./types";

export const loadLiterals = (literals) => {
  return {
    type: LOAD_LITERALS,
    payload: literals,
  };
};
