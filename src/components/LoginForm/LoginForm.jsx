import React from 'react';
import userService from '../../utils/userService';

class LoginForm extends React.Component {
  state = {
    email: '',
    password: ''
  };

  handleInputChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  handleSubmit = async (e) => {
    e.preventDefault();
    try{
      await userService.login(this.state)
      // allows the <App> to know a user logged in
      this.props.handleSignupOrLogin();
      // routes the user to the home page
      this.props.history.push('/dashboard');
    }
    catch(err) {
      // implement some type of ui for error
    }
  }
  
  render() {
    return (
      <div>
        <form>
          <label>email</label>
          <input
            type="email"
            name="email"
            value={this.state.email}
            onChange={this.handleInputChange}
            required
            />
          <label>password</label>
          <input
            type="password"
            name="password"
            value={this.state.password}
            onChange={this.handleInputChange}
            required
            />
          <button onClick={this.handleSubmit}>sign in</button>
        </form>
      </div>
    );
  }
} 

export default LoginForm;