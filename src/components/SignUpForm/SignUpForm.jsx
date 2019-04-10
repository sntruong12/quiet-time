import React from 'react';

class SignUpForm extends React.Component {
  state = {
    username: '',
    email: '',
    password: '',
  };

  handleInputChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  handleSubmit = async (e) => {
    e.preventDefault();
    try{

    }
    catch(err) {
      
    }
  }

  isFormValid() {
    return !(this.state.username && this.state.email && this.state.password)
  }

  render() {
    return (
      <div>
        <form>
          <label>username</label>
          <input
            type="text"
            name="username"
            value={this.state.username}
            onChange={this.handleInputChange}
            required
          />
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
            minLength="8"
            name="password"
            value={this.state.password}
            onChange={this.handleInputChange}
            required
          />
          <button 
            type="button"
            disabled={this.isFormValid()}
          >
            sign up        
          </button>
        </form>
      </div>
    )
  }
} 


export default SignUpForm;