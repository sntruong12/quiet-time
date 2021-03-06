import React, { Component } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import HomePage from '../HomePage/HomePage';
import LoginPage from '../LoginPage/LoginPage';
import SignUpPage from '../SignUpPage/SignUpPage';
import DashboardPage from '../DashboardPage/DashboardPage';
import MeditationPage from '../MeditationPage/MeditationPage';
import QuotePage from '../QuotePage/QuotePage';
import AdminPage from '../AdminPage/AdminPage';
import userService from '../../utils/userService';
import quoteService from '../../utils/quotesService';
import miscellaneousService from '../../utils/miscellaneousService';
import './App.css';

class App extends Component {
  state = {
    user: {},
    teacher: '',
    quote: ''
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
    this.setState({
      teacher: e.target.innerHTML
    })
  }

  handleRandomQuote = async () => {
    let quotes = await quoteService.getQuotes(this.state.teacher);
    let length = quotes.length;
    let randomIndex = miscellaneousService.randomIndexForArray(length);
    this.setState({
      quote: quotes[randomIndex]
    });
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
              user={this.state.user}
            />
            :
            <Redirect to="/" />
          )}
          />
          <Route exact path="/quote" render={() => (
            userService.getUser() ?
            <QuotePage
              user={this.state.user}
              quote={this.state.quote}
              teacher={this.state.teacher}
              handleRandomQuote={this.handleRandomQuote}
            />
            :
            <Redirect to="/" />
          )}
          />
          <Route exact path="/admin" render={() => (
            userService.getAdmin() ?
            <AdminPage />
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
