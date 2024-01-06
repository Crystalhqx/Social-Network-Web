import React, { useState } from "react";
import { Route, Switch, Redirect } from "react-router-dom";

import Login from "./Login";
import Register from "./Register";
import Home from "./Home";
import Introduction from "./Introduction";

function Main(props) {
  const { isLoggedIn, handleLoggedIn } = props;

  const showLogin = () => {
    // case1: isLoggedIn => show home
    // case2: not isLoggedIn => show login
    return isLoggedIn ? (
      <Redirect to="/home" />
    ) : (
      <Login handleLoggedIn={handleLoggedIn} />
    );
  };

  const showHome = () => {
    return isLoggedIn ? <Home /> : <Redirect to="/" />;
  };

  const showIntro = () => {
    return <Introduction />;
  };

  return (
    <div className="main">
      <Switch>
        <Route path="/" exact render={showIntro} />
        <Route path="/login" render={showLogin} />
        <Route path="/register" component={Register} />
        <Route path="/home" render={showHome} />
      </Switch>
    </div>
  );
}

export default Main;
