import styled, { css } from 'styled-components';

export const TextVariant = {
  text1: css`
    margin-top: 27px;
    margin-bottom: 18px;
    text-align: center;

    font-weight: ${({ theme }) => theme.font.weight4};
    font-size: ${({ theme }) => theme.font.size4};
    line-height: ${({ theme }) => theme.font.height5};
    color: ${({ theme }) => theme.colors.grey1};
  `,

  text2: css`
    font-weight: ${({ theme }) => theme.font.weight6};
    font-size: ${({ theme }) => theme.font.size2};
    line-height: ${({ theme }) => theme.font.height3};
    color: ${({ theme }) => theme.colors.whiteFixed};
  `,

  text3: css`
    text-align: center;
    font-weight: ${({ theme }) => theme.font.weight6};
    font-size: ${({ theme }) => theme.font.size4};
    line-height: ${({ theme }) => theme.font.height4};
    color: ${({ theme }) => theme.colors.grey1};
  `,
};

export const TextStyled = styled.p`
  font-family: 'Inter';
  font-style: normal;

  ${({ variant }) => TextVariant[variant]}
`;

export const LabelStyled = styled.label`
  font-family: 'Inter';
  font-style: normal;
  padding-bottom: 8px;
  font-weight: ${({ theme }) => theme.font.weight6};
  font-size: ${({ theme }) => theme.font.size4};
  color: ${({ theme }) => theme.colors.grey0};
`;
