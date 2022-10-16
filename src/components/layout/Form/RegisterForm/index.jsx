/* eslint-disable react/prop-types */

import { TitleStyled } from '../../../generics/Title';
import { TextStyled } from '../../../generics/Text';
import { BoxInput } from '../../BoxInput';
import { Form } from '../style';
import { ButtonStyled } from '../../../generics/Button';
import { SelectBox } from '../../SelectBox';

export const RegisterForm = (props) => {
  const { variant, handleSubmit, registerUser, errors, register } = props;

  return (
    <Form variant={variant} onSubmit={handleSubmit(registerUser)}>
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

      <SelectBox register={register} />

      <ButtonStyled variant='register' type='submit'>
        Cadastrar
      </ButtonStyled>
    </Form>
  );
};
