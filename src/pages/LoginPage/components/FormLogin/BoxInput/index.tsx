import { UseFormRegister } from 'react-hook-form';
import { InputStyled } from '../../../../../components/Input/style';
import { LabelStyled } from '../../../../../components/Text';

import { iFormLogin } from '../../../../../contexts/AuthProvider/types';
import { BoxStyled } from '../BoxPassword/style';

interface iBoxInputProps {
  register: UseFormRegister<iFormLogin>;
  errors: any;
  id: 'email';
  type: 'email';
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
