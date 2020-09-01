import React, { useState, useEffect } from 'react';
import '../assets/styles/components/Header.scss';
import Logo from '../assets/images/logo.svg';
import HamburguerMenu from '../assets/images/icon-hamburger.svg';
import IconDelete from '../assets/images/icon-close.svg';
import MenuDesktop from '../components/MenuDesktop';
import { NavLink as Link } from 'react-router-dom';

const Header = ({ flag }) => {
  console.log(flag);
  const [menu, setMenu] = useState(() => {
    try {
      const menu = window.localStorage.getItem('menu');
      return JSON.parse(menu);
    } catch (e) {
      return false;
    }
  });

  const [showFixed, setShowFixed] = useState(false);
  const Icon = !menu ? HamburguerMenu : IconDelete;

  const setLocalStorage = (value) => {
    try {
      window.localStorage.setItem('menu', value);
      setMenu(value);
    } catch (e) {
      console.error(e);
    }
  };

  useEffect(
    function () {
      const onScroll = (e) => {
        const newShowFixed = window.scrollY > 70;
        showFixed !== newShowFixed && setShowFixed(newShowFixed);
      };
      document.addEventListener('scroll', onScroll);
      return () => document.removeEventListener('scroll', onScroll);
    },
    [showFixed]
  );

  const BurguerMenu = (fixed) => (
    <button
      className={fixed ? 'fixed' : 'BurguerMenu'}
      onClick={() => setLocalStorage(!menu)}
    >
      <img src={Icon} alt='menu-hamburguesa' />
    </button>
  );

  return (
    <>
      {menu ? <MenuDesktop flag={flag} /> : null}
      <section className='Header'>
        <div className='Header_PrimerContainer'>
          <Link to='/'>
            <img className='Header-Logo' src={Logo} alt='logo' />
          </Link>
          {BurguerMenu()}
          {showFixed && BurguerMenu(true)}
          <nav className='Header_PrimerContainer-Menu'>
            <Link to='/features' activeClassName='prueba'>
              Features
            </Link>

            <Link to='/pricing' activeClassName='prueba'>
              Pricing
            </Link>

            <Link to='/resources' activeClassName='prueba'>
              Resources
            </Link>
          </nav>
        </div>
        <div className='Header_SecondContainer'>
          {!flag ? (
            <>
              <Link className='SecondC-a' to='/login' activeClassName='prueba'>
                Login
              </Link>
              <Link to='/signup'>
                <button className='Header_SecondContainer-Button'>
                  Sign Up
                </button>
              </Link>
            </>
          ) : (
            <>
              <Link className='SecondC-a' activeClassName='prueba' to='/user'>
                User
              </Link>
            </>
          )}
        </div>
      </section>
    </>
  );
};

export default Header;
