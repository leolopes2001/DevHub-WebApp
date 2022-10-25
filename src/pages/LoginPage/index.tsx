import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { motion } from 'framer-motion';

import Img from '../../assets/Logo.svg';

import { ContainerLogin } from '../../layout/Containers/style';

import LoginForm from './components/FormLogin';

import schema from '../../validations/loginUser';

import { iFormLogin } from '../../contexts/AuthProvider/types';
import { Background } from '../../layout/Background/DefaultBack/style';
import { Logo } from '../../components/Logo/style';
import { useAuth } from '../../contexts/AuthProvider/AuthProvider';

const LoginPage = () => {
  const { loginUser} = useAuth();

  const {
    register, 
    handleSubmit,
    formState: { errors },
  } = useForm<iFormLogin>({
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
        </ContainerLogin>
      </motion.div>
    </Background>
  );
};

export default LoginPage;
