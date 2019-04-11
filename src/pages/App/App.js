import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import HomePage from '../HomePage/HomePage';
import LoginPage from '../LoginPage/LoginPage';
import SignUpPage from '../SignUpPage/SignUpPage';

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Switch>
          <Route exact path="/" render={() => (
            <HomePage />
          )}
          />
          <Route exact path="/login" render={() => (
            <LoginPage />
          )}
          />
          <Route exact path="/signup" render={({ history }) => (
            <SignUpPage history={history}/>
          )}
          />
        </Switch>
      </div>
    );
  }
}

export default App;
