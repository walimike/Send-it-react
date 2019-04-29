import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import LandingPage from "./LandingPage";
import HomeContainer from './HomeContainer';

import "materialize-css/dist/css/materialize.min.css";

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={LandingPage} />
          <Route exact path="/home" component={HomeContainer} />
        </Switch>
      </Router>
    );
  }
}

export default App;
