import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';

import NavigationContainer from './navigation/navigation-container';
import Home from './pages/home';
import BasketBall from './pages/basketball';
import Soccer from './pages/soccer';
import FootBall from './pages/football';

export default class App extends Component {
  constructor(props) {
    super(props)


  }
  render() {
    return (
      <div className="container">
        <Router>
          <div>
            <NavigationContainer />
            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/basketball" component={BasketBall} />
              <Route path="/soccer" component={Soccer} />
              <Route path="/football" component={FootBall} />
            </Switch>
          </div>
        </Router>
      </div>
    );
  }
};