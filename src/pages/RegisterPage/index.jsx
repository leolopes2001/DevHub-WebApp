/* eslint-disable react/prop-types */
import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { toast } from 'react-toastify';
import { Logo } from '../../components/Logo/style';
import ImgLogo from '../../assets/Logo.svg';
import { LinkStyled } from '../../components/Link';
import { TitleStyled } from '../../components/Title/index';
import { LabelStyled, TextStyled } from '../../components/Text';
import { BoxInput } from '../../layout/BoxInput';
import { Background } from '../../layout/Background/style';
import { ContainerRegister } from '../../layout/Containers/style';
import { Form } from '../../layout/Form/style';
import { ButtonStyled } from '../../components/Button';
import { SelectBox } from './style';
import schema from '../../validations/registerUser';
import api from '../../service/api';

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
      <ContainerRegister>
        <header>
          <Logo src={ImgLogo} alt='Logo site' />
          <LinkStyled to='/login'>Voltar</LinkStyled>
        </header>

        <Form variant='register' onSubmit={handleSubmit(onSubmit)}>
          <TitleStyled variant='title1' tag='h3'>
            Crie sua conta
          </TitleStyled>

          <TextStyled variant='text3'>Rapido e grátis, vamos nessa</TextStyled>

          <BoxInput
            id='name'
            type='text'
            info='Digite aqui seu nome'
            text='Nome'
            register={register}
            errors={errors}
          />

          <BoxInput
            id='email'
            type='email'
            info='Digite aqui seu email'
            text='Email'
            register={register}
            errors={errors}
          />

          <BoxInput
            id='password'
            type='password'
            info='Digite aqui sua senha'
            text='Senha'
            register={register}
            errors={errors}
          />

          <BoxInput
            id='confirmPassword'
            type='password'
            info='Digite novamente sua senha'
            text='Confirmar Senha'
            register={register}
            errors={errors}
          />

          <BoxInput
            id='bio'
            type='text'
            info='Fale sobre você'
            text='Bio'
            register={register}
            errors={errors}
          />

          <BoxInput
            id='contact'
            type='text'
            info='Opção de contato'
            text='Contato'
            register={register}
            errors={errors}
          />

          <SelectBox>
            <LabelStyled htmlFor='course_module'>Selecionar módulo</LabelStyled>
            <select id='course_module' {...register('course_module')}>
              <option value='1'>Primeiro Módulo</option>
              <option value='2'>Segundo Módulo</option>
              <option value='3'>Terceiro Módulo</option>
              <option value='4'>Quarto Módulo</option>
              <option value='5'>Quinto Módulo</option>
              <option value='6'>Sexto Módulo</option>
            </select>
          </SelectBox>

          <ButtonStyled variant='register' type='submit'>
            Cadastrar
          </ButtonStyled>
        </Form>
      </ContainerRegister>
    </Background>
  );
};

export default RegisterPage;
