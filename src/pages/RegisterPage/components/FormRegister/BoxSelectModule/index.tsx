import { UseFormRegister } from 'react-hook-form';
import { LabelStyled } from '../../../../../components/Text';
import { iFormRegister } from '../../../../../contexts/AuthProvider/types';
import { SelectBoxStyled } from './style';

interface iSelectBox {
  register: UseFormRegister<iFormRegister>;
  defaultValue: string;
}

export const BoxSelectModule = ({ register, defaultValue }: iSelectBox) => (
  <SelectBoxStyled>
    <LabelStyled htmlFor='course_module'>Selecionar módulo</LabelStyled>
    <select
      id='course_module'
      {...register('course_module')}
      defaultValue={defaultValue}
    >
      <option value='Primeiro módulo (Introdução ao Frontend)'>
        Primeiro módulo (Introdução ao Frontend)
      </option>
      <option value='Segundo módulo (Frontend Avançado)'>
        Segundo módulo (Frontend Avançado)
      </option>
      <option value='Terceiro módulo (Introdução ao Backend)'>
        Terceiro módulo (Introdução ao Backend)
      </option>
      <option value='Quarto módulo (Backend Avançado)'>
        Quarto módulo (Backend Avançado)
      </option>
    </select>
  </SelectBoxStyled>
);
