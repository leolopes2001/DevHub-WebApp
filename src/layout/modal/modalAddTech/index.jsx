/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */

import { LabelStyled } from '../../../components/Text';

import { ButtonStyled } from '../../../components/Button/index';
import { InputStyled } from '../../../components/Input/style';
import { TitleStyled } from '../../../components/Title/index';

import { ModalStyled, divHeader, divInputName, divSelect } from './style';

export const ModalAddTech = ({ setIsActiveModalAdd }) => (
  <ModalStyled>
    <div className='overlay'>
      <form className='content'>
        <divHeader>
          <TitleStyled>Cadastrar Tecnologia</TitleStyled>
          <ButtonStyled type='button' onClick={() => setIsActiveModalAdd(null)}>
            X
          </ButtonStyled>
        </divHeader>

        <divInputName>
          <LabelStyled htmlFor='techName'>Nome</LabelStyled>

          <InputStyled type='text' id='techName' disabled />
        </divInputName>

        <divSelect>
          <LabelStyled htmlFor='status'>Selecionar status</LabelStyled>
          <select name='status' id=''>
            <option value=''>1</option>
            <option value=''>1</option>
            <option value=''>1</option>
            <option value=''>1</option>
            <option value=''>1</option>
          </select>
        </divSelect>

        <ButtonStyled type='submit'>Cadastrar Tecnologia</ButtonStyled>
      </form>
    </div>
  </ModalStyled>
);
