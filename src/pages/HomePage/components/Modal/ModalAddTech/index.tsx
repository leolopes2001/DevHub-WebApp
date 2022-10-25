import { yupResolver } from '@hookform/resolvers/yup';
import { AnimatePresence, motion } from 'framer-motion';
import { useEffect, useRef } from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import { ButtonStyled } from '../../../../../components/Button';
import { InputStyled } from '../../../../../components/Input/style';
import { SelectStyled } from '../../../../../components/Select/style';
import { LabelStyled } from '../../../../../components/Text';
import { TitleStyled } from '../../../../../components/Title';
import { useTech } from '../../../../../contexts/TechProvider/TechProvider';
import { useOutsideClick } from '../../../../../hooks/useOutsideClick';
import api from '../../../../../service/api';
import { iTech } from '../../../../../service/getDataUser';
import schema from '../../../../../validations/addTech';
import {
  BoxHeader,
  BoxInputName,
  BoxPadding,
  BoxSelect,
  ModalStyled,
} from './style';

export const ModalAddTech = () => {
  const { isActiveModalAdd, setIsActiveModalAdd, setTechList } = useTech();

  const modalRef = useOutsideClick(() => setIsActiveModalAdd(false));

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
              <form
                className='content'
                ref={modalRef}
                onSubmit={handleSubmit(onSubmit)}
              >
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
