import React from 'react';
import Logo from '../assets/images/logo.svg';
import { Link } from 'react-router-dom';
import '../assets/styles/components/Footer.scss';
import {
  FaInstagram,
  FaFacebook,
  FaTwitter,
  FaPinterest,
} from 'react-icons/fa';

const Footer = () => {
  return (
    <section className='Footer'>
      {/* Logo */}
      <Link to='/'>
        <img className='Footer_img' src={Logo} alt='Logo' />
      </Link>
      <nav className='Footer_menu'>
        <ol>
          <h3>Features</h3>
          <Link to='/onwork' className='Anchor'>
            Link Shortening
          </Link>
          <Link to='/onwork' className='Anchor'>
            Branded Links
          </Link>
          <Link to='/onwork' className='Anchor'>
            Analytics
          </Link>
        </ol>
        <ol>
          <h3>Resources</h3>
          <Link to='/onwork' className='Anchor'>
            Blog
          </Link>
          <Link to='/onwork' className='Anchor'>
            Developers
          </Link>
          <Link to='/onwork' className='Anchor'>
            Support
          </Link>
        </ol>
        <ol>
          <h3>Company</h3>
          <Link to='/onwork' className='Anchor'>
            About
          </Link>
          <Link to='/onwork' className='Anchor'>
            Our Team
          </Link>
          <Link to='/onwork' className='Anchor'>
            Careers
          </Link>
          <Link to='/onwork' className='Anchor'>
            Contact
          </Link>
        </ol>
      </nav>
      {/* Iconos */}
      <div className='ContainerImages'>
        <FaFacebook />
        <FaTwitter />
        <FaPinterest />
        <FaInstagram />
      </div>
    </section>
  );
};

export default Footer;
