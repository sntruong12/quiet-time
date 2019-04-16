import React from 'react';
import DashboardButton from '../../components/DashboardButton/DashboardButton';
import LoginButton from '../../components/LoginButton/LoginButton';
import LogoutButton from '../../components/LogoutButton/LogoutButton';
import SignUpButton from '../../components/SignUpButton/SignUpButton';
import Tooltip from '@material-ui/core/Tooltip';
import InfoIcon from '@material-ui/icons/Info';
import './HomePage.css';

const HomePage = (props) => {
  //check if user is logged in and render components conditionally
  let home = props.user ?
    <div>
      <DashboardButton />
      <LogoutButton 
        handleLogout={props.handleLogout}
      />
    </div>
    :
    <div>
      <LoginButton />
      <SignUpButton />
    </div>
  
  return (
    <div className="homepage-container">
      <h1>quiet time</h1>
      <div>
        <Tooltip title="quiet time is an app focused to get you in the right mindset for growth. We provide an environment for you to let go of the otherworldly distractions through breathing exercises. This will put you in a place to focus on an idea. Through a minimalistic experience, we share with you a meaningful quote from a thought leader. The end goal is provide you a space and opportunity to be introspective." placement="top">
          <InfoIcon />
        </Tooltip>
      </div>
      {home}
    </div>
  );
}

export default HomePage;