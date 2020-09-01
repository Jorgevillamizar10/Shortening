import React from 'react';
import Header from './Header';
import Footer from './Footer';
import Context from '../Context';

const Layaout = ({ children }) => (
  <Context.Consumer>
    {({ isAuth }) => {
      return (
        <>
          <Header flag={isAuth} />
          {children}
          <Footer />
        </>
      );
    }}
  </Context.Consumer>
);

export default Layaout;
