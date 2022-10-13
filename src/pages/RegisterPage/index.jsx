/* eslint-disable react/prop-types */
import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { toast } from 'react-toastify';
import { motion } from 'framer-motion';
import { Logo } from '../../components/Logo/style';
import ImgLogo from '../../assets/Logo.svg';

import { LinkStyled } from '../../components/Link';

import { Background } from '../../layout/Background/DefaultBack/style';
import { ContainerRegister } from '../../layout/Containers/style';

import schema from '../../validations/registerUser';
import api from '../../service/api';
import { RegisterForm } from '../../layout/Form/RegisterForm';

const RegisterPage = () => {
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (formData) => {
    api
      .post('/users', formData)
      .then(() => {
        navigate('/login');
        toast.success('Registro realizado com suceeso!');
      })
      .catch(({ response: { data } }) => {
        toast.error(data.message);
      });
  };

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
            onSubmit={onSubmit}
            errors={errors}
            register={register}
          />
        </ContainerRegister>
      </motion.div>
    </Background>
  );
};

export default RegisterPage;
