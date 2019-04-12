import React, { Component } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import HomePage from '../HomePage/HomePage';
import LoginPage from '../LoginPage/LoginPage';
import SignUpPage from '../SignUpPage/SignUpPage';
import DashboardPage from '../DashboardPage/DashboardPage';
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

  handleSignupOrLogin = () => {
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
      user
    })
  }

  render() {
    return (
      <div className="App">
        <Switch>
          <Route exact path="/" render={() => (
            userService.getUser() ?
            <Redirect to="/dashboard" />
            :
            <HomePage 
              user={this.state.user}
              handleLogout={this.handleLogout}
            />
          )}
          />
          <Route exact path="/login" render={({ history }) => (
            <LoginPage 
              handleSignupOrLogin={this.handleSignupOrLogin}
              history={history}
            />
          )}
          />
          <Route exact path="/signup" render={({ history }) => (
            <SignUpPage 
              handleSignupOrLogin={this.handleSignupOrLogin}
              history={history}
            />
          )}
          />
          <Route exact path="/dashboard" render={() => (
            <DashboardPage 
              user={this.state.user}
            />
          )}
          />
        </Switch>
      </div>
    );
  }
}

export default App;
