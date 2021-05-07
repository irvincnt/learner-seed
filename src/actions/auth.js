//import { types } from "../types/types";

import { fetchWithoutToken } from "../helpers/fetch";
import { types } from "../types/types";

export const startLogin = (email, password) => {
  return async (dispatch) => {
    const resp = await fetchWithoutToken("auth", { email, password }, "POST");
    const body = await resp.json();
    console.log(body);
    if (body.ok) {
      localStorage.setItem("token", body.token);
      localStorage.setItem("token-init.date", new Date().getTime());

      dispatch(
        login({
          uid: body.uid,
          name: body.name,
        })
      );
    } else {
      alert(`Error ${body.msg}`);
    }
  };
};

export const startRegister = (name, email, password) => {
  return async (dispatch) => {
    const resp = await fetchWithoutToken(
      "auth/new",
      { name, email, password },
      "POST"
    );
    const body = await resp.json();
    console.log(body);
    if (body.ok) {
      localStorage.setItem("token", body.token);
      localStorage.setItem("token-init.date", new Date().getTime());

      dispatch(
        login({
          uid: body.uid,
          name: body.name,
        })
      );
    } else {
      alert(`Error ${body.msg}`);
    }
  };
};

const login = (user) => ({
  type: types.authLogin,
  payload: user,
});
