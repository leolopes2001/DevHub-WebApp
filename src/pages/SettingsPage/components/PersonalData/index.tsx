import { SubmitHandler, useForm } from 'react-hook-form';
import { AnimatePresence, motion } from 'framer-motion';
import { yupResolver } from '@hookform/resolvers/yup';
import { toast } from 'react-toastify';
import { BoxDataUser } from './BoxDataUser';

import { SelectBox } from './SelectBox';
import { MainStyled } from './style';

import { useAuth } from '../../../../contexts/AuthProvider/AuthProvider';
import api from '../../../../service/api';

import schema from '../../../../validations/updateDataUser';
import { ButtonStyled } from '../../../../components/Button';

export interface iDataUser {
  name: string;
  email: string;
  bio: string;
  contact: string;
  course_module: string;
}

export const PersonalData = () => {
  const {
    user: { name, email, course_module, bio, contact },
    setUser,
  } = useAuth();

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<iDataUser>({
    resolver: yupResolver(schema),
  });

  const updateDataUser: SubmitHandler<iDataUser> = async (
    formData: iDataUser
  ) => {
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
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0, x: '-03%' }}
        animate={{ opacity: 1, x: '0%' }}
        exit={{ opacity: 0, x: '0%' }}
        transition={{ duration: 0.6 }}
      >
        <MainStyled>
          <form onSubmit={handleSubmit(updateDataUser)}>
            <BoxDataUser
              id='name'
              type='text'
              info='Digite seu nome'
              text='Nome'
              register={register}
              errors={errors}
              defaultValue={name}
            />

            <BoxDataUser
              id='email'
              type='text'
              info='Digite aqui seu email'
              text='Email'
              register={register}
              errors={errors}
              defaultValue={email}
            />

            <BoxDataUser
              id='bio'
              type='text'
              info='Fale sobre você'
              text='Bio'
              register={register}
              errors={errors}
              defaultValue={bio}
            />

            <BoxDataUser
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
      </motion.div>
    </AnimatePresence>
  );
};
// nome,email,bio,contato,module
