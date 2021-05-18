import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { BrowserRouter as Router, Switch, Redirect } from "react-router-dom";
import { startChecking } from "../actions/auth";
import Login from "../components/auth/Login";
import Register from "../components/auth/Register";
import Dasboard from "../components/pages/Dasboard";
import { PrivateRoute } from "./PrivateRoute";
import { PublicRoute } from "./PublicRoute";

export const AppRouter = () => {
  const dispatch = useDispatch();
  const { checking, uid } = useSelector((state) => state.auth);

  useEffect(() => {
    dispatch(startChecking());
  }, [dispatch]);

  if (checking) {
    return <h5>Espere...</h5>;
  }

  return (
    <Router>
      <div>
        <Switch>
          <PublicRoute
            exact
            path="/login"
            component={Login}
            isAuthenticated={!!uid}
          />
          <PublicRoute
            exact
            path="/register"
            component={Register}
            isAuthenticated={!!uid}
          />

          <PrivateRoute
            exact
            path="/dasboard"
            isAuthenticated={!!uid}
            component={Dasboard}
          />

          <Redirect to="/dasboard" />
        </Switch>
      </div>
    </Router>
  );
};
