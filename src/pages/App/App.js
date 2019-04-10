import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import LoginPage from '../LoginPage/LoginPage';
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
        </Switch>
      </div>
    );
  }
}

export default App;
