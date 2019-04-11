import React from 'react';
import LoginButton from '../../components/LoginButton/LoginButton';
import LogoutButton from '../../components/LogoutButton/LogoutButton';
import SignUpButton from '../../components/SignUpButton/SignUpButton';

const HomePage = (props) => {
  //check if user is logged in and render components conditionally
  let home = props.user ?
    <LogoutButton />
    :
    <div>
      <LoginButton />
      <SignUpButton />
    </div>
  
  return (
    <div>
      <h1>quiet time</h1>
      {home}
    </div>
  );
}

export default HomePage;