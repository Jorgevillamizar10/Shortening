import React, { useState } from 'react';
import Working from '../assets/images/illustration-working.svg';
import '../assets/styles/components/ShorterLinks.scss';

const ShorterLinks = () => {
  return (
    <section className='FirtSection'>
      <img className='FirtSection-ImgMobile' src={Working} alt='imagen' />
      <div className='FirtSection_container'>
        <h1>
          More than just <br />
          shorter links
        </h1>
        <p>
          Build your brand's recognition and get detailed <br />
          insights on how your links are performing.
        </p>
        <button>Get Started</button>
      </div>
      <img className='FirtSection-img' src={Working} alt='imagen' />
    </section>
  );
};

export default ShorterLinks;
