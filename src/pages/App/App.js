import React, { Component } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import HomePage from '../HomePage/HomePage';
import LoginPage from '../LoginPage/LoginPage';
import SignUpPage from '../SignUpPage/SignUpPage';
import DashboardPage from '../DashboardPage/DashboardPage';
import MeditationPage from '../MeditationPage/MeditationPage';
import userService from '../../utils/userService';
import './App.css';

class App extends Component {
  state = {
    ...this.getInitialState(),
    user: {},
    teacher: '',
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

  handleTeacherClick = (e) => {
    console.log(e.target.innerHTML)
    this.setState({
      teacher: e.target.innerHTML
    })
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
            userService.getUser() ?
            <DashboardPage 
              user={this.state.user}
              handleTeacherClick={this.handleTeacherClick}
            />
            :
            <Redirect to="/" />
          )}
          />
          <Route exact path="/meditation" render={() => (
            userService.getUser() ?
            <MeditationPage 
              teacher={this.state.teacher}
            />
            :
            <Redirect to="/" />
          )}
          />
        </Switch>
      </div>
    );
  }
}

export default App;
