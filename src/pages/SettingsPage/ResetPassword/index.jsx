/* eslint-disable no-unused-vars */
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import * as yup from 'yup';
import { AnimatePresence, motion } from 'framer-motion';
import { ButtonStyled } from '../../../components/generics/Button';
import { BoxInput } from '../../../components/layout/BoxInput/index';
import api from '../../../service/api';
import { MainStyled } from './style';

const schema = yup.object({
  old_password: yup.string().required('Senha antiga é obrigatória'),
  password: yup
    .string()
    .min(8, 'No minimo 8 caracteres')
    .matches(/[A-Z]/, 'Deve conter ao menos 1 letra maiúscula')
    .matches(/[a-z]/, 'Deve conter ao menos 1 letra minuscula')
    .matches(/(\d)/, 'Deve conter ao menos um número')
    .matches(/(\W)|_/, 'Deve conter um caracter especial')
    .matches(/.{8,}/, 'Deve ter no minimo 8 digitos')
    .required('Senha é obrigatória'),
  confirmPassword: yup
    .string()
    .oneOf(
      [yup.ref('password')],
      'Confirmação de senha deve ser igual a senha'
    ),
});

const ResetPassowrd = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm({
    resolver: yupResolver(schema),
  });

  const handleReset = async (formData) => {
    try {
      await api.put('/profile', formData);

      toast.success('Senha atualizada com sucesso!');

      reset();
    } catch (error) {
      console.log(error);
      toast.error('Algo deu errado,verifque os dados!');
    }
  };

  return (
    <AnimatePresence>
      <motion.div>
        <MainStyled
          initial={{ opacity: 0, x: '-03%' }}
          animate={{ opacity: 1, x: '0%' }}
          exit={{ opacity: 0, x: '0%' }}
          transition={{ duration: 0.6 }}
        >
          <form onSubmit={handleSubmit(handleReset)}>
            <BoxInput
              errors={errors}
              register={register}
              id='old_password'
              type='passoword'
              text='Senha antiga'
              info='Digite sua senha antiga'
            />

            <BoxInput
              errors={errors}
              register={register}
              id='password'
              type='passoword'
              text='Nova senha'
              info='Digite aqui sua nova senha'
            />

            <BoxInput
              errors={errors}
              register={register}
              id='confirmPassword'
              type='passoword'
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
