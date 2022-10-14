/* eslint-disable react/prop-types */
import { useState } from 'react';
import { AiFillEyeInvisible, AiFillEye } from 'react-icons/ai';

import { LabelStyled } from '../../../../generics/Text';
import { BoxStyled, Input, DivEye } from './style';

export const BoxInputPassword = (props) => {
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
