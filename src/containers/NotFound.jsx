import React from 'react';
import styled from 'styled-components';
import INotFound from '../assets/images/pagina-no-encontrada.svg';

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
  color: red;
  font-weight: bold;
  text-align: center;
  margin: 10px 0;
  @media (max-width: 550px) {
    font-size: 35px;
  }
`;

const Parrafo = styled.p`
  font-size: 25px;
  text-align: center;
  color: black;
  @media (max-width: 550px) {
    font-size: 20px;
    margin: 0;
  }
`;

const Img = styled.img`
  width: 150px;
`;

export const NotFound = () => {
  return (
    <Div>
      <Img src={INotFound} alt='icono-Not-Found' />
      <Title>404 NOT FOUND!</Title>
      <Parrafo>
        Sorry! we can't find the route :(.
        <br />
        Try again!.
      </Parrafo>
    </Div>
  );
};
