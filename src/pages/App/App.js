import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import LoginPage from '../LoginPage/LoginPage';
import SignUpPage from '../SignUpPage/SignUpPage';
import LoginButton from '../../components/LoginButton/LoginButton';
import SignUpButton from '../../components/SignUpButton/SignUpButton';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Switch>
          <Route exact path="/" render={() => (
            <LoginButton />
          )}
          />
          <Route exact path="/login" render={() => (
            <LoginPage />
          )}
          />
          <Route exact path="/signup" render={() => (
            <SignUpPage />
          )}
          />
        </Switch>
      </div>
    );
  }
}

export default App;
