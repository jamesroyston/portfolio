import React from "react";
import "./App.css";
import Home from "./views/Home";
import Tips from "./views/Tips";
import Nav from "./components/Nav";
import { BrowserRouter, Switch, Redirect, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Nav />

      <Switch>
        <Route exact path="/">
          <Redirect to="/home" />
        </Route>
        <Route path="/home">
          <Home />
        </Route>
        <Route path="/tips" component={Tips} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
