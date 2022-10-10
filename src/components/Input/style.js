import styled, { css } from 'styled-components';

export const InputStyled = styled.input`
  padding: 0px 12.9865px;

  width: 100%;
  height: 48px;

  background: #343b41;

  border: 0.973988px solid #343b41;
  border-radius: 3.19812px;

  ${({ borderActive }) =>
    borderActive &&
    css`
      border-color: red;
    `}

    
  &:focus {
    ${({ borderActive }) =>
      borderActive &&
      css`
        border-color: transparent;
      `}
  }
  font-family: 'Inter';
  font-style: normal;
  font-weight: 400;
  font-size: 16.2426px;
  line-height: 26px;
  color: #f8f9fa;

  &::placeholder {
    font-family: 'Inter';
    font-style: normal;
    font-weight: 400;
    font-size: 16.2426px;
    line-height: 26px;
    color: #868e96;
  }
`;
