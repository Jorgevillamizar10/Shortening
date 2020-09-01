import React from 'react';
import { NavLink as Link } from 'react-router-dom';
import '../assets/styles/components/MenuDesktop.scss';

const MenuDesktop = ({ flag }) => {
  return (
    <nav className='NavMenu'>
      <ol className='First_List'>
        <Link to='/features' activeClassName='aria-current-Desktop'>
          Features
        </Link>

        <Link to='/pricing' activeClassName='aria-current-Desktop'>
          Pricing
        </Link>

        <Link to='/resources' activeClassName='aria-current-Desktop'>
          Resources
        </Link>
      </ol>
      <ol className='Second_List'>
        {!flag ? (
          <>
            <Link to='/login' activeClassName='aria-current-Desktop'>
              Login
            </Link>
            <Link to='/signup'>
              <button className='NavMenu-button'>Sign Up</button>
            </Link>
          </>
        ) : (
          <Link to='/user'>User</Link>
        )}
      </ol>
    </nav>
  );
};

export default MenuDesktop;
