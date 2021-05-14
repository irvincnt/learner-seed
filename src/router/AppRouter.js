import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import { startChecking } from "../actions/auth";
import Login from "../components/auth/Login";
import Register from "../components/auth/Register";
import Dasboard from "../components/pages/Dasboard";

export const AppRouter = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(startChecking());
    console.log("Efecto en router");
  }, [dispatch]);

  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/" component={Login} />
          <Route exact path="/register" component={Register} />

          <Route exact path="/dasboard" component={Dasboard} />

          <Redirect to="/" />
        </Switch>
      </div>
    </Router>
  );
};
