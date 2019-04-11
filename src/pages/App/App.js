import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import HomePage from '../HomePage/HomePage';
import LoginPage from '../LoginPage/LoginPage';
import SignUpPage from '../SignUpPage/SignUpPage';
import userService from '../../utils/userService';
import './App.css';

class App extends Component {
  state = {
    ...this.getInitialState(),
    user: null
  }

  getInitialState() {
    return {

    }
  }

  /*----- Event Handlers -----*/

  handleSignUp = () => {
    this.setState({user: userService.getUser()});
  }

  handleLogout = () => {
    userService.logout();
    this.setState({ user: null });
  }

  /*----- Lifecycle Methods -----*/

  async componentDidMount() {
    const user = userService.getUser();
    this.setState({
      user,
    })
  }

  render() {
    return (
      <div className="App">
        <Switch>
          <Route exact path="/" render={() => (
            <HomePage 
              user={this.state.user}
              handleLogout={this.handleLogout}
            />
          )}
          />
          <Route exact path="/login" render={() => (
            <LoginPage />
          )}
          />
          <Route exact path="/signup" render={({ history }) => (
            <SignUpPage 
              handleSignUp={this.handleSignUp}
              history={history}
            />
          )}
          />
        </Switch>
      </div>
    );
  }
}

export default App;
