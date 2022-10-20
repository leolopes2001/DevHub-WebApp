/* eslint-disable camelcase */
/* eslint-disable no-unused-vars */
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { toast } from 'react-toastify';
import { BoxInput } from '../../../components/layout/BoxInput';

import { SelectBox } from '../../../components/layout/SelectBox';
import { MainStyled } from './style';

import { ButtonStyled } from '../../../components/generics/Button';
/* eslint-disable no-unused-vars */

import { useAuth } from '../../../contexts/AuthProvider';
import api from '../../../service/api';

const schema = yup.object({
  name: yup.string().required('Nome é obrigatório'),
  email: yup
    .string()
    .email('Deve ser um e-mail válido')
    .required('Email é obrigatório'),
  bio: yup.string().required('Biografia é obrigatório'),
  contact: yup.string().required('Contato é obrigatório'),
  course_module: yup.string().required('Módulo do curso é obrigatório'),
});

export const PersonalData = () => {
  const {
    user: { name, email, course_module, bio, contact },
    setUser,
  } = useAuth();

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm({
    resolver: yupResolver(schema),
  });

  const updateDate = async (formData) => {
    try {
      const { data } = await api.put('/profile', formData);

      setUser(data);
      toast.success('Dados atualizados com sucesso!');
    } catch (error) {
      console.log(error);
      toast.error('Dados incorretos');
    }
  };

  return (
    <MainStyled>
      <form onSubmit={handleSubmit(updateDate)}>
        <BoxInput
          id='name'
          type='text'
          info='Digite seu nome'
          text='Nome'
          register={register}
          errors={errors}
          defaultValue={name}
        />

        <BoxInput
          id='email'
          type='text'
          info='Digite aqui seu email'
          text='Email'
          register={register}
          errors={errors}
          defaultValue={email}
        />

        <BoxInput
          id='bio'
          type='text'
          info='Fale sobre você'
          text='Bio'
          register={register}
          errors={errors}
          defaultValue={bio}
        />

        <BoxInput
          id='contact'
          type='text'
          info='Opção de contato'
          text='Contato'
          register={register}
          errors={errors}
          defaultValue={contact}
        />

        <SelectBox register={register} defaultValue={course_module} />

        <ButtonStyled variant='login' type='submit'>
          Salvar Alterações
        </ButtonStyled>
        <div />
      </form>
    </MainStyled>
  );
};
// nome,email,bio,contato,module
