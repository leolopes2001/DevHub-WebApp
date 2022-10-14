/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
/* eslint-disable arrow-body-style */

import { useForm } from 'react-hook-form';

import * as yup from 'yup';

import { yupResolver } from '@hookform/resolvers/yup';
import {
  ModalStyled,
  BoxHeader,
  BoxInputName,
  BoxSelect,
  BoxPadding,
  BoxButton
} from './style';
import api from '../../../service/api';
import { LabelStyled } from '../../../components/Text';
import { TitleStyled } from '../../../components/Title';
import { ButtonStyled } from '../../../components/Button';
import { InputStyled } from '../../../components/Input/style';
import { SelectStyled } from '../../../components/Select/style';

const schema = yup.object({
  status: yup.string().required(),
});

export const ModalEditTech = ({
  contentModal,
  setContentModal,
  setTechList,
}) => {
  const { register, handleSubmit } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (formData) => {
    const submitter = window.event.submitter.name;

    const { id } = contentModal;

    try {
      api.put(`/users/techs/${id}`, formData);

      if (submitter === 'edit') {
        setTechList((oldTechList) => [
          ...oldTechList.map((tech) =>
            tech.id === id ? { ...tech, ...formData } : tech
          ),
        ]);

        setContentModal(null);
      } else if (submitter === 'delete') {
        api.delete(`/users/techs/${contentModal.id}`);

        setTechList((oldTechList) => [
          ...oldTechList.filter((tech) => tech.id !== id),
        ]);

        setContentModal(null);
      }
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <ModalStyled>
      <div className='overlay'>
        <form className='content' onSubmit={handleSubmit(onSubmit)}>
          <BoxHeader>
            <TitleStyled variant='title2' tag='h6'>
              Tecnologia Detalhes
            </TitleStyled>
            <ButtonStyled
              variant='btnCloseModal'
              type='button'
              onClick={() => setContentModal(null)}
            >
              X
            </ButtonStyled>
          </BoxHeader>

          <BoxPadding>
            <BoxInputName>
              <LabelStyled htmlFor='techName'>Nome do projeto </LabelStyled>
              <InputStyled type='text' id='techName' disabled />
            </BoxInputName>

            <BoxSelect>
              <LabelStyled htmlFor='status'>Selecionar status</LabelStyled>
              <SelectStyled name='status' {...register('status')}>
                <option value='1'>1</option>
                <option value='2'>1</option>
                <option value='3'>1</option>
                <option value='4'>1</option>
                <option value='5'>1</option>
              </SelectStyled>
            </BoxSelect>

            <BoxButton>

              <ButtonStyled variant='saveChange' type='submit' name='edit'>
                Salvar alterações
              </ButtonStyled>
              <ButtonStyled variant='deleteTech' type='submit' name='delete'>
                Excluir
              </ButtonStyled>

            </BoxButton>
          </BoxPadding>
        </form>
      </div>
    </ModalStyled>
  );
};
