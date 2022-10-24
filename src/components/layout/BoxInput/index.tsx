/* eslint-disable react/prop-types */
import { InputStyled } from '../../generics/Input/style';
import { LabelStyled } from '../../generics/Text';
import { BoxStyled } from './style';
import { UseFormRegister } from 'react-hook-form';
import { iFormLogin, iFormRegister } from '../../../contexts/AuthProvider/types';


interface iBoxInputProps {
  register: UseFormRegister<iFormRegister | iFormLogin>;
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
