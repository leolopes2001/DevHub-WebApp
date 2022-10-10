/* eslint-disable react/prop-types */
import { useNavigate } from 'react-router-dom';

import { MdOutlineAdd } from 'react-icons/md';

import { ButtonStyled } from '../../components/Button';
import Logo from '../../assets/Logo.svg';
import {
  ContainerProfile,
  ContainerHeader,
  ContainerMain,
  Header,
  SectionProfile,
} from './style';

import { Background } from '../../layout/Background/style';

import { TitleStyled } from '../../components/Title';
import { TextStyled } from '../../components/Text';

const HomePage = ({ setAuthentication }) => {
  const navigate = useNavigate();
  const logout = () => {
    window.localStorage.clear();
    setAuthentication(false);
    navigate('/');
  };
  return (
    <Background>
      <Header>
        <ContainerHeader>
          <img src={Logo} alt='Logo site' />
          <ButtonStyled onClick={() => logout()}>Sair</ButtonStyled>
        </ContainerHeader>
      </Header>

      <SectionProfile>
        <ContainerProfile>
          <TitleStyled tag='h4' variant='title1'>
            Olá, Samuel Leão
          </TitleStyled>
          <TextStyled variant='text3'>
            Primeiro módulo (Introdução ao Frontend)
          </TextStyled>
        </ContainerProfile>
      </SectionProfile>

      <main>
        <ContainerMain>
          <div>
            <h3>Tecnologias</h3>
            {/* <button type='button'>+</button> */}
            <ButtonStyled type='button' variant='addTech'>
              <MdOutlineAdd />
            </ButtonStyled>
          </div>
          {/* <ul>
            <li>1tec</li>
            <li>2tec</li>
            <li>3tec</li>
            <li>4tec</li>
            <li>5tec</li>
          </ul> */}
        </ContainerMain>
      </main>
    </Background>
  );
};

export default HomePage;
