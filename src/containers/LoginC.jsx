import React from 'react';
import LogIn from '../components/LogIn.jsx';
import Context from '../Context';

const LoginC = () => (
  <Context.Consumer>
    {({ activateAuth, login }) => {
      return (
        <LogIn
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

export default LoginC;
