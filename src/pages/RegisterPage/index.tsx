import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

import { motion } from 'framer-motion';

import ImgLogo from '../../assets/Logo.svg';

import { Background } from '../../layout/Background/DefaultBack/style';
import { ContainerRegister } from '../../layout/Containers/style';

import schema from '../../validations/registerUser';

import { useAuth } from '../../contexts/AuthProvider/AuthProvider';
import { iFormRegister } from '../../contexts/AuthProvider/types';
import { FormRegister } from './components/FormRegister';
import { Logo } from '../../components/Logo/style';
import { LinkStyled } from '../../components/Link';

const RegisterPage = () => {
  const { registerUser } = useAuth();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<iFormRegister>({
    resolver: yupResolver(schema),
  });

  return (
    <Background>
      <motion.div
        initial={{ opacity: 0, x: -100 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
      >
        <ContainerRegister>
          <header>
            <Logo src={ImgLogo} alt='Logo site' />
            <LinkStyled variant='default' to='/login'>
              Voltar
            </LinkStyled>
          </header>

          <FormRegister
            variant='register'
            handleSubmit={handleSubmit}
            registerUser={registerUser}
            errors={errors}
            register={register}
          />
        </ContainerRegister>
      </motion.div>
    </Background>
  );
};

export default RegisterPage;
