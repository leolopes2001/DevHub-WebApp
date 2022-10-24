import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import { AnimatePresence, motion } from 'framer-motion';
import { ButtonStyled } from '../../../../components/generics/Button';

import api from '../../../../service/api';
import { MainStyled } from './style';

import schema from '../../../../validations/updatePassword';
import { BoxResetPassword } from './BoxResetPassword';
import { iFormResetPassword } from './BoxResetPassword/index';
import { AxiosError } from 'axios';
import { iApiError } from '../../models';

const ResetPassowrd = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm<iFormResetPassword>({
    resolver: yupResolver(schema),
  });

  const handleReset = async (formData: iFormResetPassword) => {
    try {
      await api.put('/profile', formData);

      toast.success('Senha atualizada com sucesso!');

      reset();
    } catch (error) {
      const requestError = error as AxiosError<iApiError>
      toast.error(requestError.response?.data.error)
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
          <form onSubmit={handleSubmit(handleReset)}>
            <BoxResetPassword
              errors={errors}
              register={register}
              id='old_password'
              type='password'
              text='Senha antiga'
              info='Digite sua senha antiga'
            />

            <BoxResetPassword
              errors={errors}
              register={register}
              id='password'
              type='password'
              text='Nova senha'
              info='Digite aqui sua nova senha'
            />

            <BoxResetPassword
              errors={errors}
              register={register}
              id='confirmPassword'
              type='password'
              text='Confirme sua nova senha'
              info='Digite novamente sua nova senha'
            />

            <ButtonStyled variant='login' type='submit'>
              Redefinir Senha
            </ButtonStyled>
          </form>
        </MainStyled>
      </motion.div>
    </AnimatePresence>
  );
};

export default ResetPassowrd;
