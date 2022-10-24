
import { IoMdSettings } from 'react-icons/io';
import { MdOutlineAdd } from 'react-icons/md';
import { motion } from 'framer-motion';
import { useEffect } from 'react';
import { ButtonStyled } from '../../components/generics/Button';
import Logo from '../../assets/Logo.svg';
import {
  ContainerProfile,
  ContainerHeader,
  ContainerMain,
  Header,
  SectionProfile,
} from './style';
import { ModalAddTech } from '../../components/layout/modal/modalAddTech';
import { ModalEditTech } from '../../components/layout/modal/modalEditTech';
import { Background } from '../../layout/Background/DefaultBack/style';

import { TitleStyled } from '../../components/generics/Title';
import { TextStyled } from '../../components/generics/Text';

import { useAuth } from '../../contexts/AuthProvider/AuthProvider';
import { TechList } from '../../components/layout/TechList';

import { LinkStyled } from '../../components/generics/Link';
import { useTech } from '../../contexts/TechProvider/TechProvider';
import { getDataUser } from '../../service/getDataUser';

const HomePage = () => {
  const { logout, setUser, user } = useAuth();

  const { setTechList, setIsActiveModalAdd} = useTech();

  useEffect(() => {
    (async () => {
      try {
        const data = await getDataUser();

        const { email, name, bio, course_module, id, contact, techs } = data;

        setTechList(techs);

        setUser({ techs, email, name, bio, course_module, id, contact });
      } catch (error) {
        console.log(error);
      }
    })();
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