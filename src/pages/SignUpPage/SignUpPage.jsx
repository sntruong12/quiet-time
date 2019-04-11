import React from 'react';
import SignUpForm from '../../components/SignUpForm/SignUpForm';

const SignUpPage = (props) => (
  <div>
    <SignUpForm
      handleSignUp={props.handleSignUp}
      history={props.history}
    />
  </div>
)

export default SignUpPage;