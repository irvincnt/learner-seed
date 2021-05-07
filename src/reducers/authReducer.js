import { types } from "../types/types";

const initialState = {
  checking: true,
};

export const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.authLogin:
      return {
        uid: action.payload.uid,
        name: action.payload.displayName,
      };

    case types.authLogout:
      return {};

    default:
      return state;
  }
};
