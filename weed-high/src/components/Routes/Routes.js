import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from "../Home/Home";
import Login from "../Login/Login";
import SignUp from "../SignUp/SignUp";
import UpdateEmailOrPassword from "../UpdateEmailOrPassword/UpdateEmailOrPassword";
import PrivateRoute from "../PrivateRoute/PrivateRoute";
import ForgotPassword from "../ForgotPassword/ForgotPassword";

export default function Routes() {
  return (
    <div>
      <Switch>
        <PrivateRoute exact={true} path="/" component={Home} />
        <Route path="/login" component={Login} />
        <Route path="/signUp" component={SignUp} />
        <Route path="/forgotPassword" component={ForgotPassword} />
        <PrivateRoute
          path="/updateEmailOrPassword"
          component={UpdateEmailOrPassword}
        />

        {/* <Route exact={true} path='/products' ><Products /></Route>
            <Route exact={true} path='/contact' ><Contact /></Route>
            <Route exact={true} path='/contact' ><Footer /></Route> */}
      </Switch>
    </div>
  );
}
