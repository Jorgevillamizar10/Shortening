import React from 'react';
import { Link } from 'react-router-dom';
import '../assets/styles/components/LogIn.scss';
import { FaInstagram, FaFacebook } from 'react-icons/fa';
import { useInputValue } from '../hooks/useInputValue';

const SignUp = ({ onSubmit }) => {
  const email = useInputValue('');
  const password = useInputValue('');
  const name = useInputValue('');

  return (
    <section className='SectionLogin'>
      <div className='SectionLogin_Container'>
        <h1>Sign Up</h1>
        <form
          onSubmit={(e) => {
            onSubmit(e, name.value, email.value, password.value);
          }}
        >
          <input type='text' placeholder='Nombre' {...name} />
          <input type='text' placeholder='Email' {...email} />
          <input type='password' placeholder='Password' {...password} />
          <button>Sign Up</button>
          <div>
            <p>
              <input type='checkbox' id='box1' value='checkbox' />
              Remember me!
            </p>
            {/* <Link to='/'>Forget the password</Link> */}
          </div>
        </form>
        <section className='login_container-social'>
          <div>
            <FaFacebook />
            Registrate con Facebook
          </div>
          <div>
            <FaInstagram />
            Registrate con Instagram
          </div>
        </section>
        <p>
          Si ya tienes una cuenta <Link to='/login'>Login</Link>
        </p>
      </div>
    </section>
  );
};

export default SignUp;
