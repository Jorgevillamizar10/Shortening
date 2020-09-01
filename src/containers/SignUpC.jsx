import React from 'react';
import SignUp from '../components/SignUp.jsx';
import Context from '../Context';

const SignUpC = () => (
  <Context.Consumer>
    {({ activateAuth, login }) => {
      return (
        <SignUp
          onSubmit={(e, name, email, password) => {
            e.preventDefault();
            login(name, email, password);
            activateAuth();
          }}
        />
      );
    }}
  </Context.Consumer>
);

export default SignUpC;
