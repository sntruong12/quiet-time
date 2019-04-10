import React from 'react';
import { Link } from 'react-router-dom';

const SignUpButton = (props) => (
  <div>
    <Link to="/signup">
      <button>Sign Up</button>
    </Link>
  </div>
);

export default SignUpButton;