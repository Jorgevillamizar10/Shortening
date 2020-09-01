import React from 'react';
import IconBrand from '../assets/images/icon-brand-recognition.svg';
import IconRecord from '../assets/images/icon-detailed-records.svg';
import IconCustom from '../assets/images/icon-fully-customizable.svg';
import Input from './Input';
import '../assets/styles/components/Advanced.scss';

const Advanced = () => {
  return (
    <section className='SecondSection'>
      {/* Primer Container */}
      <div className='SecondSection_Fcontainer'>
        <Input />
        <h2>Advanced Statistics</h2>
        <p>
          Track how your links are performing across the web with <br />
          our advanced statistics dashboard.
        </p>
      </div>
      <div className='SecondSection_Scontainer'>
        {/* Primero */}
        <div className='Firts'>
          <i className='Icon'>
            <img src={IconBrand} />
          </i>
          <h3>Brand Recognition</h3>
          <p>
            Boost your brand recognition with
            <br />
            each click. Generic links don't mean a <br />
            thing.Branded links help instil
            <br />
            confidence in your content.
          </p>
        </div>
        <p className='Separador-y'>|</p>
        <i className='Separador-x'>-</i>
        {/* Segundo */}
        <div>
          <i className='Icon'>
            <img src={IconRecord} />
          </i>
          <h3>Detailed Records</h3>
          <p>
            Gain insights into who is clicking your
            <br />
            links. Knowing when and where <br />
            people engage with your content
            <br />
            helps inform better decisions.
          </p>
        </div>
        <p className='Separador-y'>|</p>
        <i className='Separador-x'>-</i>
        {/* Tercero */}
        <div className='Last'>
          <i className='Icon'>
            <img src={IconCustom} />
          </i>
          <h3>Fully Customizable</h3>
          <p>
            Improve brand awareness and
            <br />
            content discoverability through <br />
            customizable links, supercharging
            <br />
            audience engagement.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Advanced;
