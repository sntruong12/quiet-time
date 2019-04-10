import React from 'react';
import LoginButton from '../../components/LoginButton/LoginButton';
import SignUpButton from '../../components/SignUpButton/SignUpButton';

const HomePage = (props) => (
  <div>
    <h1>quiet time</h1>
    <LoginButton />
    <SignUpButton />
  </div>
);

export default HomePage;