import { UseFormRegister } from 'react-hook-form';
import { InputStyled } from '../../../../../components/Input/style';
import { LabelStyled } from '../../../../../components/Text';

import { iFormRegister } from '../../../../../contexts/AuthProvider/types';
import { BoxStyled } from './style';


interface iBoxInputProps {
  register: UseFormRegister<iFormRegister>;
  errors: any;
  id:
    | 'name'
    | 'email'
    | 'password'
    | 'bio'
    | 'contact'
    | 'course_module'
    | 'confirmPassword';
  type: 'text' | 'email' | 'number' | 'password';
  info: string;
  text: string;
  defaultValue?: string;
}

export const BoxInput = (props: iBoxInputProps) => {
  const { id, type, info, text, errors, register, defaultValue } = props;

  return (
    <BoxStyled>
      <LabelStyled htmlFor={id}>{text}</LabelStyled>
      <InputStyled
        borderActive={errors[id]?.message}
        type={type}
        id={id}
        placeholder={info}
        {...register(id)}
        defaultValue={defaultValue}
      />

      <p>{errors[id]?.message}</p>
    </BoxStyled>
  );
};
