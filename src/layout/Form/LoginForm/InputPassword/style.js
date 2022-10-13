import styled from 'styled-components';
import { InputStyled } from '../../../../components/Input/style';

export const BoxStyled = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 123px;
  position: relative;

  p {
    margin-top: 12px;
    color: red;
  }
`;

export const Input = styled(InputStyled)`
  position: relative;
`;

export const DivEye = styled.div`
  position: absolute;
  cursor: pointer;
  top: 38px;
  right: 30px;

  svg {
    position: absolute;
    color: #f8f9fa;
  }
`;
