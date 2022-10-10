/* eslint-disable react/prop-types */
import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { toast } from 'react-toastify';
import { useState } from 'react';
import Img from '../../assets/Logo.svg';

import { Logo } from '../../components/Logo/style';
import { Background } from '../../layout/Background/style';
import { ContainerLogin } from '../../layout/Containers/style';

import LoginForm from '../../layout/Form/LoginForm';

import schema from '../../validations/loginUser';
import api from '../../service/api';
import { LoadingBack } from '../../layout/Background/LoadingBack/LoadingBack';

const LoginPage = ({ setUser }) => {
  const navigate = useNavigate();

  const [isLoading, setLoading] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (formData) => {
    setLoading(true);
    api
      .post('/sessions', formData)
      .then((res) => {
        window.localStorage.clear();

        window.localStorage.setItem('userToken', res.data.token);
        window.localStorage.setItem('userId', res.data.user.id);

        setUser(res.data);
        navigate('/');
        setLoading(() => {
          setInterval(() => {
            setLoading(false);
          }, 500);
        });
        toast.success('Login realizado com sucesso!');
      })
      .catch(() => {
        setLoading(false);
        toast.error('Algo deu errado, tente novamente!');
      });
  };

  return (
    <Background>
      <ContainerLogin>
        <header>
          <Logo src={Img} alt='Logo' />
        </header>

        <LoginForm
          variant='login'
          handleSubmit={handleSubmit}
          onSubmit={onSubmit}
          register={register}
          errors={errors}
        />

        {isLoading && <LoadingBack />}
      </ContainerLogin>
    </Background>
  );
};

export default LoginPage;
