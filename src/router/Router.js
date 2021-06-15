import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import { About } from "../components/About";
import { Main } from "../components/Main";
import { Navbar } from "../components/Navbar";
export const Rout = () => {
  return (
    <Router>
      <>
        <Navbar />
        <Switch>
          <Route exact path="/" component={Main}></Route>
          <Route exact path="/about" component={About}></Route>
          <Redirect to="/" component={Main} />
        </Switch>
      </>
    </Router>
  );
};
