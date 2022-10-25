import { useState } from 'react';
import { UseFormRegister } from 'react-hook-form';
import { AiFillEyeInvisible, AiFillEye } from 'react-icons/ai';
import { LabelStyled } from '../../../../../components/Text';


import { iFormLogin } from '../../../../../contexts/AuthProvider/types';
import { BoxStyled, Input, DivEye } from './style';

interface iLoginFormProps {
  id: 'email' | 'password';

  info: string;
  text: string;
  register: UseFormRegister<iFormLogin>;
  errors: any;
}

export const BoxPassword = (props: iLoginFormProps) => {
  const { id, info, text, errors, register } = props;

  const [showPassowrd, setShowPassword] = useState(false);

  return (
    <BoxStyled>
      <LabelStyled htmlFor={id}>{text}</LabelStyled>
      <Input
        borderActive={errors[id]?.message}
        type={showPassowrd ? 'text' : 'password'}
        id={id}
        placeholder={info}
        {...register(id)}
      />

      <DivEye onClick={() => setShowPassword(!showPassowrd)}>
        {showPassowrd ? <AiFillEye /> : <AiFillEyeInvisible />}
      </DivEye>

      <p>{errors[id]?.message}</p>
    </BoxStyled>
  );
};
