import React from 'react';
import { Link } from 'react-router-dom';

const DashboardButton = (props) => (
  <div>
    <Link to="/dashboard">
      <button>
        Dashboard
      </button>
    </Link>
  </div>
);

export default DashboardButton;