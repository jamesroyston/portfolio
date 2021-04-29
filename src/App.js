import React from "react";
import "./App.css";
import Home from "./views/Home";
import Tips from "./views/Tips";
import Nav from "./components/Nav";
import { HashRouter, Switch, Redirect, Route } from "react-router-dom";

function App() {
  return (
    <HashRouter>
      <Nav />

      <Switch>
        <Route exact path="/">
          <Redirect to="/home" />
        </Route>
        <Route path="/home">
          <Home />
        </Route>
        <Route path="/self" component={Tips} />
      </Switch>
    </HashRouter>
  );
}

export default App;
