import styled, { css } from 'styled-components';
import { baseTitle } from './baseTitle';

const TitleVariant = {
  title1: css`
    font-weight: 700;
    font-size: 18px;
    line-height: 28px;
    color: #f8f9fa;
  `,
};

export const TitleStyled = styled(baseTitle)`
  font-family: 'Inter';
  font-style: normal;
  text-align: center;
  margin-bottom: 20px;
  ${({ variant }) => TitleVariant[variant]}
`;
