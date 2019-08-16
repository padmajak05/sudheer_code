import { Route, Link, Redirect } from "react-router-dom";

import React, { Component } from 'react';
import Home from "../components/home";
import About from "../components/welcome";
import LoginPage from '../components/LoginPage/login';
import RegisterPage from '../components/LoginPage/register';
const Routes = () => {
  return <div>
    <Route path="/" exact={true} render={() => <Redirect to="/login" />} />
    <Route path="/home" component={Home} />
    <Route path="/about" component={About} />
    <Route path="/login" component={LoginPage} />
    <Route path="/register" component={RegisterPage} />
  </div>;
}

export default Routes;  