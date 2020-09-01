import React from 'react';
import styled from 'styled-components';
import BackImgBoost from '../assets/images/bg-boost-desktop.svg';
import BackImgBoostMobile from '../assets/images/bg-boost-mobile.svg';
import { FaUserCircle } from 'react-icons/fa';
import Context from '../Context';

const Section = styled.section`
  width: 100%;
  height: 500px;
  background: blue;
  display: flex;
  flex-direction: column;
  /* background: white; */
  background: linear-gradient(hsl(180, 66%, 49%), hsl(255, 11%, 22%));
`;

const ContainerFondo = styled.div`
  color: white;
  width: 100%;
  height: 60%;
  background-color: hsl(257, 27%, 26%);
  background-image: url(${BackImgBoost});
  background-size: 100% 100%;
  background-repeat: no-repeat;
  @media (max-width: 500px) {
    background-image: url(${BackImgBoostMobile});
  }
`;

const UserData = styled.div`
  color: white;
  margin-left: 25px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: left;
  /* background: red; */
  @media (max-width: 500px) {
    margin: 5px;
    /* background: red; */
    width: 35%;
  }
`;

const VisualContact = styled.div`
  width: 76%;
  height: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: left;
  margin-left: 160px;
  /* background: green; */
  @media (max-width: 900px) {
    margin-left: 15px;
    justify-content: center;
    width: 100%;
  }
  @media (max-width: 500px) {
    margin: 0;
  }
`;

const UserDataParraf = styled.p`
  color: white;
  margin: 0;
  font-size: 16px;
  width: 100%;
`;

const Boton = styled.button`
  margin: 0;
  font-weight: bold;
  font-size: 16px;
  background-color: hsl(180, 66%, 49%);
  border: none;
  border-radius: 25px;
  height: 40px;
  width: 140px;
  color: white;
  outline: none;
  cursor: pointer;
  &[disabled] {
    opacity: 0.3;
  }
`;

const Title = styled.h1`
  color: white;
  font-size: 20px;
  margin: 0;
  @media (max-width: 500px) {
    text-align: center;
  }
`;

const Email = styled.p`
  color: white;
  font-size: 18px;
  width: 100%;
  text-align: center;
`;

const ContainerLogOut = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  /* background: yellow; */
  width: 30%;
  height: 100%;
  margin-left: 160px;
  @media (max-width: 900px) {
    margin-left: 15px;
    width: 100%;
    /* background: pink; */
  }
  @media (max-width: 500px) {
    margin: 0;
  }
`;

export const User = () => (
  <Context.Consumer>
    {({ isAuth, removeAuth, name, email, logout }) => {
      return (
        <Section>
          <ContainerFondo>
            <VisualContact>
              <FaUserCircle size='200px' />
              <UserData>
                <Title>{name}</Title>
                <UserDataParraf>Ing Informatico</UserDataParraf>
              </UserData>
            </VisualContact>
          </ContainerFondo>
          <ContainerLogOut>
            <Email>{email}</Email>
            <Boton
              onClick={() => {
                logout();
                removeAuth();
              }}
            >
              Cerrar Sesion
            </Boton>
            {console.log(isAuth)}
          </ContainerLogOut>
        </Section>
      );
    }}
  </Context.Consumer>
);
