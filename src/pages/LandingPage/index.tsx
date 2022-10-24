import { motion } from 'framer-motion';

import Logo from '../../assets/Logo.svg';
import Welcome from '../../assets/welcome.svg';
import { LinkStyled } from '../../components/generics/Link';
import { Background } from '../../layout/Background/DefaultBack/style';
import { DivImg, DivTitle, Main } from './style';

const LandingPage = () => {
  return (
    <Background>
      <motion.div
        initial={{ opacity: 0, x: -100 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
      >
        <Main>
          <DivTitle>
            <h4>Bem Vindo</h4>
            <h4>a</h4>
            <img src={Logo} alt='Logo site' />
            <LinkStyled variant='default' to='/login'>
              Comecar
            </LinkStyled>
          </DivTitle>

          <DivImg>
            <img src={Welcome} alt='Welcome img' />
          </DivImg>
        </Main>
      </motion.div>
    </Background>
  );
};
export default LandingPage;
