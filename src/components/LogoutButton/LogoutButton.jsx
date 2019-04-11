import React from 'react';
import { Link } from 'react-router-dom';

const LogoutButton = (props) => (
  <div>
    <Link to="/logout">
      <button>
        Logout
      </button>
    </Link>
  </div>
);

export default LogoutButton;