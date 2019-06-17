import React, { Fragment } from "react";
import { Route, Switch } from "react-router-dom";

import { About } from "../About/About";
import { HomePage } from "../HomePage/HomePage";

import "./App.css";

const App = () => {
  return (
    <Fragment>
      <Switch>
        <Route path="/about" component={About} />
        <Route path="/" component={HomePage} />
      </Switch>
    </Fragment>
  );
};

export { App };
