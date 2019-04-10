import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import LoginButton from './components/LoginButton/LoginButton';
import SignUpButton from './components/SignUpButton/SignUpButton';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <p>
            quiet time
          </p>
          <LoginButton />
          <SignUpButton />
        </header>
        <Switch>
          <Route path="/test" render={() => (
            <p>test</p>
          )}
          />
          <Route path="/test1" render={() => (
            <p>test123</p>
          )}
          />
        </Switch>
      </div>
    );
  }
}

export default App;
