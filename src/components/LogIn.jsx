import React from 'react';
import { Link } from 'react-router-dom';
import '../assets/styles/components/LogIn.scss';
import { FaInstagram, FaFacebook } from 'react-icons/fa';
import { useInputValue } from '../hooks/useInputValue';

const LogIn = ({ onSubmit }) => {
  const email = useInputValue('');
  const password = useInputValue('');

  return (
    <section className='SectionLogin'>
      <div className='SectionLogin_Container'>
        <h1>Login</h1>
        <form
          onSubmit={(e) => {
            onSubmit(e, email.value, email.value, password.value);
          }}
        >
          <input type='text' placeholder='Email' {...email} />
          <input type='password' placeholder='Password' {...password} />
          <button>Login</button>
          <div>
            <p>
              <input type='checkbox' id='box1' value='checkbox' />
              Remember me!
            </p>
            <Link to='/'>Forget the password</Link>
          </div>
        </form>
        <section className='login_container-social'>
          <div>
            <FaFacebook />
            Inicia Sesion con Facebook
          </div>
          <div>
            <FaInstagram />
            Inicia Sesion con Instagram
          </div>
        </section>
        <p>
          Si no tienes una cuenta <Link to='/signup'>Sign Up</Link>
        </p>
      </div>
    </section>
  );
};

export default LogIn;
