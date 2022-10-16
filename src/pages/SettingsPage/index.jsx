/* eslint-disable no-unused-vars */
import { Outlet } from 'react-router-dom';
import { FaUserAlt } from 'react-icons/fa';
import { AiFillLock } from 'react-icons/ai';
import { IoIosColorPalette } from 'react-icons/io';
import { AnimatePresence, motion } from 'framer-motion';
import { useState } from 'react';
import { Background } from '../../layout/Background/DefaultBack/style';
import Logo from '../../assets/Logo.svg';
import { LinkStyled } from '../../components/generics/Link';

import { HeaderStyled, ContainerSettingsPage, NavStyled } from './style';

const SettingsPage = () => {
  const [whichIsActive, setWhichIsActive] = useState('Dados Pessoais');

  return (
    <Background>
      <AnimatePresence>
        <motion.div
          initial={{ opacity: 0, x: '-03%' }}
          animate={{ opacity: 1, x: '0%' }}
          exit={{ opacity: 0, x: '0%' }}
          transition={{ duration: 0.6 }}
        >
          <ContainerSettingsPage>
            <HeaderStyled>
              <img src={Logo} alt='' />
              <LinkStyled to='/home'>Voltar</LinkStyled>
            </HeaderStyled>
          </ContainerSettingsPage>

          <ContainerSettingsPage>
            <NavStyled>
              <LinkStyled
                whichisactive={whichIsActive}
                onClick={() => setWhichIsActive('Dados Pessoais')}
                variant='navLink'
                to='/settings'
              >
                <FaUserAlt />
                Dados Pessoais
              </LinkStyled>
              <LinkStyled
                whichisactive={whichIsActive}
                onClick={() => setWhichIsActive('Redifinir Senha')}
                variant='navLink'
                to='resetPassoword'
              >
                <AiFillLock />
                Redifinir Senha
              </LinkStyled>
              <LinkStyled
                whichisactive={whichIsActive}
                onClick={() => setWhichIsActive('Mudar Tema')}
                variant='navLink'
                to='changeTheme'
              >
                <IoIosColorPalette />
                Mudar Tema
              </LinkStyled>
            </NavStyled>
          </ContainerSettingsPage>

          <Outlet />
        </motion.div>
      </AnimatePresence>
    </Background>
  );
};
export default SettingsPage;
