/* eslint-disable import/no-named-as-default */
/* eslint-disable react/prop-types */

import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

import { motion } from 'framer-motion';
import { useContext } from 'react';
import { Logo } from '../../components/Logo/style';
import ImgLogo from '../../assets/Logo.svg';

import { LinkStyled } from '../../components/Link';

import { Background } from '../../layout/Background/DefaultBack/style';
import { ContainerRegister } from '../../layout/Containers/style';

import schema from '../../validations/registerUser';

import { RegisterForm } from '../../layout/Form/RegisterForm';
import { AuthContext } from '../../contexts/AuthContext';

const RegisterPage = () => {
  const { registerUser } = useContext(AuthContext);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
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
            <LinkStyled to='/login'>Voltar</LinkStyled>
          </header>

          <RegisterForm
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
