import React from 'react';
import styled from 'styled-components';
import BackImgBoost from '../assets/images/bg-boost-desktop.svg';
import BackImgBoostMobile from '../assets/images/bg-boost-mobile.svg';

//Estilos--------------------------------------
const Contanier = styled.div`
  margin: 0;
  width: 100%;
  height: 200px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background-color: hsl(257, 27%, 26%);
  background-image: url(${BackImgBoost});
  background-size: 100% 100%;
  background-repeat: no-repeat;
  @media (max-width: 500px) {
    background-image: url(${BackImgBoostMobile});
  }
`;

const Boton = styled.button`
  margin: 0;
  font-weight: bold;
  font-size: 15px;
  background-color: hsl(180, 66%, 49%);
  border: none;
  border-radius: 25px;
  height: 50px;
  width: 150px;
  color: white;
  outline: none;
  cursor: pointer;
  &[disabled] {
    opacity: 0.3;
  }
`;

const Title = styled.h2`
  font-size: 40px;
  margin: 10px;
  color: white;
  @media (max-width: 500px) {
    font-size: 30px;
  }
  @media (max-width: 360px) {
    font-size: 25px;
  }
  @media (max-width: 330px) {
    font-size: 20px;
  }
`;

const Boost = () => {
  return (
    <Contanier>
      <Title>Boost your links today</Title>
      <Boton>Get Started</Boton>
    </Contanier>
  );
};

export default Boost;
