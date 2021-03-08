import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";
import Login from '../components/auth/Login';
import Register from '../components/auth/Register';

export default function AppRouter() {
  return (
    <div>
      <Router>
        <div>
          <Switch>
            <Route exact path="/" component={Login}/>
            <Route exact path="/register" component={Register}/>

            <Redirect to="/" />
          </Switch>
        </div>
    </Router>
    </div>
  )
}
