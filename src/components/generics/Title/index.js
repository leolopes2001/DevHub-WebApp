import styled, { css } from 'styled-components';
import { baseTitle } from './baseTitle';

const TitleVariant = {
  title1: css`
    font-weight: ${({ theme }) => theme.font.weight3};
    font-size: ${({ theme }) => theme.font.size1};
    line-height: ${({ theme }) => theme.font.height1};
    color: ${({ theme }) => theme.colors.grey0};
    margin-bottom: 20px;
  `,

  title2: css`
    font-weight: ${({ theme }) => theme.font.weight3};
    font-size: ${({ theme }) => theme.font.size3};
    line-height: ${({ theme }) => theme.font.height3};
    color: ${({ theme }) => theme.colors.grey0};
  `,
};

export const TitleStyled = styled(baseTitle)`
  font-family: 'Inter';
  font-style: normal;
  text-align: center;

  ${({ variant }) => TitleVariant[variant]}
`;
