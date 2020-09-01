import React from 'react';
import Imagen from '../assets/images/herramientas.svg';
import styled from 'styled-components';

const Div = styled.div`
  max-width: 100%;
  height: 800px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  @media (max-width: 850px) {
    margin-top: 20px;
    position: relative;
    top: 30px;
  }
  @media (max-width: 550px) {
    top: -10px;
    height: 300px;
    margin-top: 0;
  }
`;

const Title = styled.h1`
  font-size: 50px;
  font-weight: bold;
  text-align: center;
  margin: 10px 0;
  color: black;
  @media (max-width: 550px) {
    font-size: 25px;
  }
`;

const Parrafo = styled.p`
  font-size: 25px;
  text-align: center;
  color: black;
  @media (max-width: 550px) {
    font-size: 14px;
    margin: 0 10px;
  }
`;

export const OnWork = () => {
  return (
    <Div>
      <img src={Imagen} alt='icono' width='150px' />
      <Title>We are in Maintenance!</Title>
      <Parrafo>
        Sorry! in this moment we can't open the page :(.
        <br /> comeback in a few minutes!.
      </Parrafo>
    </Div>
  );
};
