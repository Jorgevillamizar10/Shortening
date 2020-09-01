import React, { createContext, useState } from 'react';

const Context = createContext();

const Provider = ({ children }) => {
  const [isAuth, setIsAuth] = useState(
    window.localStorage.getItem('isAuth') || false
  );
  const [name, setName] = useState( window.localStorage.getItem('name') || 'Desconocido');
  const [email, setEmail] = useState(window.localStorage.getItem('email') || 'Desconocido');
  const [password, setPassword] = useState(window.localStorage.getItem('password') || 'Desconocido');

  const value = {
    isAuth,
    activateAuth: () => {
      setIsAuth(true);
      window.localStorage.setItem('isAuth', isAuth);
    },
    removeAuth: () => {
      setIsAuth(false);
      window.localStorage.removeItem('isAuth');
    },
    name,
    email,
    password,
    login: (name2, email2, password2) => {
      setName(name2);
      window.localStorage.setItem('name', name2);
      setEmail(email2);
      window.localStorage.setItem('email', email2);
      setPassword(password2);
      window.localStorage.setItem('password', password2);
    },
    logout: () => {
      setName('Desconocido');
      window.localStorage.removeItem('name');
      setEmail('Desconocido');
      window.localStorage.removeItem('email');
      setPassword('Desconocido');
      window.localStorage.removeItem('password');
    },
  };
  return <Context.Provider value={value}>{children}</Context.Provider>;
};

export default {
  Provider,
  Consumer: Context.Consumer,
};
