import React from 'react';
import SignUpForm from '../../components/SignUpForm/SignUpForm';

const SignUpPage = (props) => (
  <div>
    <SignUpForm
      handleSignupOrLogin={props.handleSignupOrLogin}
      history={props.history}
    />
  </div>
)

export default SignUpPage;