/* eslint-disable react/prop-types */
import { InputStyled } from '../../generics/Input/style';
import { LabelStyled } from '../../generics/Text';
import { BoxStyled } from './style';

export const BoxInput = (props) => {
  const { id, type, info, text, errors, register } = props;

  return (
    <BoxStyled>
      <LabelStyled htmlFor={id}>{text}</LabelStyled>
      <InputStyled
        borderActive={errors[id]?.message}
        type={type}
        id={id}
        placeholder={info}
        {...register(id)}
      />

      <p>{errors[id]?.message}</p>
    </BoxStyled>
  );
};