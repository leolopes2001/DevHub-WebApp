/* eslint-disable no-unused-vars */
/* eslint-disable import/no-named-as-default */
/* eslint-disable react/prop-types */
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { motion } from 'framer-motion';

import Img from '../../assets/Logo.svg';

import { Logo } from '../../components/generics/Logo/style';
import { Background } from '../../layout/Background/DefaultBack/style';
import { ContainerLogin } from '../../layout/Containers/style';

import LoginForm from '../../components/layout/Form/LoginForm';

import schema from '../../validations/loginUser';
import { LoadingBack } from '../../layout/Background/LoadingBack/LoadingBack';
import { useAuth } from '../../contexts/AuthContext';

const LoginPage = () => {
  const { loginUser, isLoading } = useAuth();

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
        initial={{ opacity: 0, x: '-03%' }}
        animate={{ opacity: 1, x: '0%' }}
        exit={{ opacity: 0, x: '0%' }}
        transition={{ duration: 0.6 }}
      >
        <ContainerLogin>
          <header>
            <Logo src={Img} alt='Logo' />
          </header>

          <LoginForm
            variant='login'
            loginUser={loginUser}
            handleSubmit={handleSubmit}
            register={register}
            errors={errors}
          />

          {isLoading && <LoadingBack />}
        </ContainerLogin>
      </motion.div>
    </Background>
  );
};

export default LoginPage;
