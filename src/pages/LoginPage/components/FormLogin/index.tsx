

import { BoxInput } from './BoxInput';



import { iFormLogin } from '../../../../contexts/AuthProvider/types';

import {
  FieldErrorsImpl,
  SubmitHandler,
  UseFormHandleSubmit,
  UseFormRegister,
} from 'react-hook-form';
import { BoxPassword } from './BoxPassword';
import { Form } from './style';
import { ButtonStyled } from '../../../../components/Button';
import { LinkStyled } from '../../../../components/Link';
import { TextStyled } from '../../../../components/Text';
import { TitleStyled } from '../../../../components/Title';

export interface iLoginFormProps {
  variant: any;
  register: UseFormRegister<iFormLogin>;
  handleSubmit: UseFormHandleSubmit<iFormLogin>;
  loginUser: SubmitHandler<iFormLogin>;
  errors: Partial<FieldErrorsImpl<{ [x: string]: any }>>;
}

const LoginForm = ({
  variant,
  handleSubmit,
  loginUser,
  errors,
  register,
}: iLoginFormProps) => (
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

    <BoxPassword
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
