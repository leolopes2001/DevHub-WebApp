import Logo from '../../assets/Logo.svg';
import { Background } from '../../layout/Background/style';
import Welcome from '../../assets/welcome.svg';
import { DivImg, DivTitle, Main } from './style';
import { LinkStyled } from '../../components/Link';

const LandingPage = () => (
  <Background>
    <Main>
      <DivTitle>
        <h4>Bem Vindo</h4>
        <h4>a</h4>
        <img src={Logo} alt='Logo site' />
        <LinkStyled to='login'>Comecar</LinkStyled>
      </DivTitle>

      <DivImg>
        <img src={Welcome} alt='Welcome img' />
      </DivImg>
    </Main>
  </Background>
);
export default LandingPage;
