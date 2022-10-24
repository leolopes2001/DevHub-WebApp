import { UseFormRegister } from 'react-hook-form';
import { InputStyled } from '../../../../../components/generics/Input/style';
import { LabelStyled } from '../../../../../components/generics/Text';
import { BoxStyled } from '../../PersonalData/BoxDataUser/style';


export interface iFormResetPassword {
  old_password: string;
  password: string;
  confirmPassword: string;
}

interface iBoxInputProps {
  register: UseFormRegister<iFormResetPassword>;
  errors: any;
  id: 'old_password' | 'password' | 'confirmPassword';
  type: 'text' | 'email' | 'number' | 'password';
  info: string;
  text: string;
  defaultValue?: string;
}

export const BoxResetPassword = (props: iBoxInputProps) => {
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
