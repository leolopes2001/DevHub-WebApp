/* eslint-disable no-unused-expressions */
/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */

import { AnimatePresence, motion } from 'framer-motion';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { useEffect } from 'react';
import { LabelStyled } from '../../../components/Text';

import { ButtonStyled } from '../../../components/Button/index';
import { InputStyled } from '../../../components/Input/style';
import { TitleStyled } from '../../../components/Title/index';

import { SelectStyled } from '../../../components/Select/style';
import {
  ModalStyled,
  BoxHeader,
  BoxInputName,
  BoxSelect,
  BoxPadding,
} from './style';
import api from '../../../service/api';

const schema = yup.object({
  title: yup.string().required('O título é obrigatório'),
  status: yup.string().required(),
});

export const ModalAddTech = ({
  isActiveModalAdd,
  setIsActiveModalAdd,
  setTechList,
}) => {
  const {
    register,
    handleSubmit,
    clearErrors,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  useEffect(() => {
    clearErrors();
  }, [isActiveModalAdd]);

  const onSubmit = async (formData) => {
    try {
      const { data } = await api.post('/users/techs', formData);

      setTechList((oldListTech) => [...oldListTech, data]);

      setIsActiveModalAdd(false)
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <AnimatePresence>
      {isActiveModalAdd && (
        <ModalStyled>
          <div className='overlay'>
            <motion.div
              initial={{ opacity: 0, y: '-100px' }}
              animate={{ opacity: 1, y: '0px' }}
              exit={{ opacity: 0, y: '-100px' }}
              transition={{ duration: 0.4 }}
            >
              <form className='content' onSubmit={handleSubmit(onSubmit)}>
                <BoxHeader>
                  <TitleStyled variant='title2' tag='h6'>
                    Cadastrar Tecnologia
                  </TitleStyled>
                  <ButtonStyled
                    variant='btnCloseModal'
                    type='button'
                    onClick={() => setIsActiveModalAdd(null)}
                  >
                    X
                  </ButtonStyled>
                </BoxHeader>

                <BoxPadding>
                  <BoxInputName>
                    <LabelStyled htmlFor='techName'>Nome</LabelStyled>

                    <InputStyled
                      placeholder='Nome da Tecnologia'
                      type='text'
                      id='techName'
                      {...register('title')}
                    />
                    <p>{errors.title?.message}</p>
                  </BoxInputName>

                  <BoxSelect>
                    <LabelStyled htmlFor='status'>
                      Selecionar status
                    </LabelStyled>
                    <SelectStyled name='status' {...register('status')}>
                      <option>Iniciante</option>
                      <option>Avançado</option>
                      {/* <option>Terceiro Módulo</option>
                      <option>Quarto Módulo</option>
                      <option>Quinto Módulo</option>
                      <option>Sexto Módulo</option> */}
                    </SelectStyled>
                    <p>{errors.status?.message}</p>
                  </BoxSelect>

                  <ButtonStyled variant='login' type='submit'>
                    Cadastrar Tecnologia
                  </ButtonStyled>
                </BoxPadding>
              </form>
            </motion.div>
          </div>
        </ModalStyled>
      )}
    </AnimatePresence>
  );
};
