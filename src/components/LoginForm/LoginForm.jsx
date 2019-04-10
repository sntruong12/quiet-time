import React from 'react';

const LoginForm = (props) => (
  <div>
    <label>email</label>
    <input type="text" required/>
    <label>password</label>
    <input type="password" required/>
    <button>sign in</button>
  </div>
);

export default LoginForm;