/* eslint-disable no-unused-vars */
/* eslint-disable import/no-named-as-default */
/* eslint-disable react/prop-types */

import { MdOutlineAdd } from 'react-icons/md';
import { AnimatePresence, motion } from 'framer-motion';
import { useContext, useState, useEffect } from 'react';
import { ButtonStyled } from '../../components/Button';
import Logo from '../../assets/Logo.svg';
import {
  ContainerProfile,
  ContainerHeader,
  ContainerMain,
  Header,
  SectionProfile,
} from './style';

import { Background } from '../../layout/Background/DefaultBack/style';

import { TitleStyled } from '../../components/Title';
import { TextStyled } from '../../components/Text';

import { AuthContext } from '../../contexts/AuthContext';
import { TechList } from '../../layout/TechList';
import { ModalEditTech } from '../../layout/modal/modalEditTech';
import { ModalAddTech } from '../../layout/modal/modalAddTech';
import api from '../../service/api';

const HomePage = () => {
  const { logout, user, setUser } = useContext(AuthContext);

  const [techList, setTechList] = useState([]);

  const [isActiveModalAdd, setIsActiveModalAdd] = useState(false);

  const [contentModal, setContentModal] = useState(false);

  useEffect(() => {
    const loadData = async () => {
      try {
        const { data } = await api.get('/profile');

        setTechList(data.techs);
        setUser(data);
      } catch (error) {
        console.log(error);
      }
    };

    loadData();
  }, []);

  return (
    <Background>
      <motion.div
        initial={{ opacity: 0, x: -100 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
      >
        <Header>
          <ContainerHeader>
            <img src={Logo} alt='Logo site' />
            <ButtonStyled onClick={() => logout()}>Sair</ButtonStyled>
          </ContainerHeader>
        </Header>

        <SectionProfile>
          <ContainerProfile>
            <TitleStyled tag='h4' variant='title1'>
              Olá, {user.name}
            </TitleStyled>
            <TextStyled variant='text3'>Primeiro módulo</TextStyled>
          </ContainerProfile>
        </SectionProfile>

        <main>
          <ContainerMain>
            <div>
              <h3>Tecnologias</h3>

              <ButtonStyled
                type='button'
                variant='btnOpenModal'
                onClick={() => {
                  setIsActiveModalAdd(true);
                }}
              >
                <MdOutlineAdd />
              </ButtonStyled>
            </div>

            <ModalAddTech
              isActiveModalAdd={isActiveModalAdd}
              setIsActiveModalAdd={setIsActiveModalAdd}
              setTechList={setTechList}
            />

            {contentModal && (
              <ModalEditTech
                contentModal={contentModal}
                setContentModal={setContentModal}
                setTechList={setTechList}
              />
            )}

            <TechList techList={techList} setContentModal={setContentModal} />
          </ContainerMain>
        </main>
      </motion.div>
    </Background>
  );
};

export default HomePage;
