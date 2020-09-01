import React from 'react';
import styled from 'styled-components';
import BackImg from '../assets/images/bg-shorten-desktop.svg';
import BackImgMobile from '../assets/images/bg-shorten-mobile.svg';

// Estilos----------------
const Container = styled.div`
  margin: 0;
  height: 125.66px;
  width: 895.81px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  top: -60px;
  background-color: hsl(257, 27%, 26%);
  background-image: url(${BackImg});
  background-size: 100% 100%;
  background-repeat: no-repeat;
  border-radius: 10px;
  @media (max-width: 1000px) {
    width: 50%;
    height: 160px;
    flex-direction: column;
    top: -50px;
  }

  @media (max-width: 500px) {
    top: -80px;
    width: 90%;
    background-image: url(${BackImgMobile});
  }
`;

const Boton = styled.button`
  margin: 0;
  font-weight: bold;
  font-size: 15px;
  background-color: hsl(180, 66%, 49%);
  border: none;
  border-radius: 10px;
  height: 50px;
  width: 150px;
  color: white;
  outline: none;
  cursor: pointer;
  &[disabled] {
    opacity: 0.3;
  }
  @media (max-width: 1000px) {
    height: 40px;
    width: 120px;
    margin: 5px 0px;
  }

  @media (max-width: 500px) {
    width: 90%;
    border-radius: 5px;
  }
`;

const Search = styled.input`
  width: 70%;
  height: 10px;
  border: none;
  border-radius: 10px;
  margin-right: 20px;
  padding: 20px;
  outline: none;
  font-size: 16px;
  color: black;
  &::placeholder {
    color: hsl(0, 0%, 75%);
    font-weight: bold;
    letter-spacing: 1px;
  }
  @media (max-width: 1000px) {
    height: 40px;
    padding: 5px;
    margin: 0;
    /* width: 180px; */
    margin: 10px 0px;
    letter-spacing: 0px;
  }
  @media (max-width: 500px) {
    width: 87%;
    border-radius: 5px;
  }
`;

const Input = () => {
  return (
    <Container>
      <Search type='text' placeholder='Shorten a link here...' />
      <Boton>Shorten it!</Boton>
    </Container>
  );
};

export default Input;
