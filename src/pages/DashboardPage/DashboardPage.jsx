import React from 'react';
import Dashboard from '../../components/Dashboard/Dashboard';

const DashboardPage = (props) => (
  <div>
    <Dashboard
      user={props.user}
    />
  </div>
);

export default DashboardPage;