/* eslint-disable react/prop-types */

import { TitleStyled } from '../../../generics/Title';
import { ButtonStyled } from '../../../generics/Button';
import { LinkStyled } from '../../../generics/Link/index';
import { Form } from '../style';
import { BoxInput } from '../../BoxInput';
import { TextStyled } from '../../../generics/Text';

import { BoxInputPassword } from './InputPassword';

const LoginForm = ({ variant, handleSubmit, loginUser, errors, register }) => (
  <Form variant={variant} onSubmit={handleSubmit(loginUser)}>
    <TitleStyled variant='title1' tag='h3'>
      Login
    </TitleStyled>

    <BoxInput
      id='email'
      type='email'
      info='Digite aqui seu email'
      text='Email'
      register={register}
      errors={errors}
    />

    <BoxInputPassword
      id='password'
      info='Digite aqui sua senha'
      text='Senha'
      register={register}
      errors={errors}
    />

    <ButtonStyled type='submit' variant='login'>
      Entrar
    </ButtonStyled>

    <TextStyled variant='text1'>Ainda não possui uma conta?</TextStyled>

    <LinkStyled variant='register' to='/register'>
      Cadastre-se
    </LinkStyled>
  </Form>
);

export default LoginForm;
