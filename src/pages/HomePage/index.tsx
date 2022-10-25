import { IoMdSettings } from 'react-icons/io';
import { MdOutlineAdd } from 'react-icons/md';
import { motion } from 'framer-motion';

import Logo from '../../assets/Logo.svg';
import {
  ContainerProfile,
  ContainerHeader,
  ContainerMain,
  Header,
  SectionProfile,
} from './style';

import { Background } from '../../layout/Background/DefaultBack/style';

import { useAuth } from '../../contexts/AuthProvider/AuthProvider';

import { ModalAddTech } from './components/Modal/ModalAddTech';
import { ModalEditTech } from './components/Modal/ModalEditTech';
import { TechList } from './components/TechList';
import { LinkStyled } from '../../components/Link';
import { TextStyled } from '../../components/Text';
import { TitleStyled } from '../../components/Title';
import { ButtonStyled } from '../../components/Button';
import { useTech } from '../../contexts/TechProvider/TechProvider';

const HomePage = () => {
  const { logout, user } = useAuth();

  const { setIsActiveModalAdd } = useTech();

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
            <LinkStyled variant='settings' to='/settings'>
              <IoMdSettings />
            </LinkStyled>
            <img src={Logo} alt='Logo site' />
            <ButtonStyled onClick={() => logout()}>Sair</ButtonStyled>
          </ContainerHeader>
        </Header>

        <SectionProfile>
          <ContainerProfile>
            <TitleStyled tag='h4' variant='title1'>
              Olá, {user.name}
            </TitleStyled>

            <TextStyled variant='text3'>{user.course_module}</TextStyled>
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

            <ModalAddTech />

            <ModalEditTech />

            <TechList />
          </ContainerMain>
        </main>
      </motion.div>
    </Background>
  );
};

export default HomePage;
