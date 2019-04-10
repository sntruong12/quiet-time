import React from 'react';

const SignUpForm = (props) => (
  <div>
    <label>username</label>
    <input type="text" required/>
    <label>email</label>
    <input type="text" required/>
    <label>password</label>
    <input type="password" minlength="8" required/>
    <button>sign up</button>
  </div>
);

export default SignUpForm;