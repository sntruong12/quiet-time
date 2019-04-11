import React from 'react';
import LoginForm from '../../components/LoginForm/LoginForm';

const LoginPage = (props) => (
    <div>
      <LoginForm 
        handleSignupOrLogin={props.handleSignupOrLogin}
        history={props.history}
      />
    </div>
);


export default LoginPage;