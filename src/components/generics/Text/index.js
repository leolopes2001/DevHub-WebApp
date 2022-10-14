import styled, { css } from 'styled-components';

export const TextVariant = {
  text1: css`
    font-weight: 600;
    font-size: 12px;
    line-height: 18px;

    color: #868e96;
    margin-top: 27px;
    margin-bottom: 18px;
    text-align: center;
  `,

  text2: css`
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    color: #ffffff;
  `,

  text3: css`
    font-weight: 400;
    font-size: 12px;
    line-height: 22px;
    color: #868e96;
    text-align: center;
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
