import React from 'react';
import Dashboard from '../../components/Dashboard/Dashboard';

const DashboardPage = (props) => (
  <div>
    <Dashboard
      user={props.user}
      handleTeacherClick={props.handleTeacherClick}
    />
  </div>
);

export default DashboardPage;