import { UseFormRegister } from 'react-hook-form';


import { BoxStyled } from '../../../../RegisterPage/style';
import { iDataUser } from '..';
import { LabelStyled } from '../../../../../components/Text';
import { InputStyled } from '../../../../../components/Input/style';

interface iBoxInputProps {
  register: UseFormRegister<iDataUser>;
  errors: any;
  id:
    | 'name'
    | 'email'
    | 'bio'
    | 'contact'
    | 'course_module'
  type: 'text' | 'email' | 'number' | 'password';
  info: string;
  text: string;
  defaultValue?: string;
}

export const BoxDataUser = (props: iBoxInputProps) => {
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
