/* eslint-disable no-unused-expressions */
/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */

import { AnimatePresence, motion } from 'framer-motion';
import { useForm } from 'react-hook-form';

import { yupResolver } from '@hookform/resolvers/yup';
import { useEffect } from 'react';
import { toast } from 'react-toastify';
import { LabelStyled } from '../../../generics/Text';

import { ButtonStyled } from '../../../generics/Button/index';
import { InputStyled } from '../../../generics/Input/style';
import { TitleStyled } from '../../../generics/Title/index';

import { SelectStyled } from '../../../generics/Select/style';
import {
  ModalStyled,
  BoxHeader,
  BoxInputName,
  BoxSelect,
  BoxPadding,
} from './style';
import api from '../../../../service/api';
import { useTech } from '../../../../contexts/TechProvider/TechProvider';

import schema from '../../../../validations/addTech';
import { iTech } from '../../../../service/getDataUser';

export const ModalAddTech = () => {
  const { isActiveModalAdd, setIsActiveModalAdd, setTechList } = useTech();

  const {
    register,
    handleSubmit,
    clearErrors,
    reset,
    formState: { errors },
  } = useForm<iTech>({
    resolver: yupResolver(schema),
  });

  useEffect(() => {
    clearErrors();
  }, [isActiveModalAdd]);

  const onSubmit = async (formData: iTech) => {
    try {
      const { data } = await api.post('/users/techs', formData);

      console.log(data);

      setTechList((oldListTech) => [...oldListTech, data]);

      setIsActiveModalAdd(false);

      toast.success('Tecnologia Cadastrada!');
      reset();
    } catch (error) {
      toast.error('Essa tecnologia já foi adicionada!');
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
                    onClick={() => setIsActiveModalAdd(false)}
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
                    <SelectStyled {...register('status')}>
                      <option value='Iniciante'>Iniciante</option>
                      <option value='Intermediário'>Intermediário</option>
                      <option value='Avançado'>Avançado</option>
                    </SelectStyled>
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
