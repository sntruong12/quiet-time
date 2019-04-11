import React from 'react';
import { Link } from 'react-router-dom';

const LogoutButton = (props) => (
  <div>
    <Link
      to=""
      onClick={props.handleLogout}
    >
      <button>
        Logout
      </button>
    </Link>
  </div>
);

export default LogoutButton;