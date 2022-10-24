import styled, { css } from 'styled-components';

export const BoxStyled = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 123px;

  p {
    margin-top: 12px;
    color: red;
  }
`;

interface iForm {
  variant: 'register';
}

const FormVariant = {
  register: css`
    margin-bottom: 4rem;
    p {
      margin-bottom: 1.3rem;
    }
  `,
};

export const Form = styled.form<iForm>`
  background: ${({ theme }) => theme.colors.grey3};
  box-shadow: 0px 4px 40px -10px rgba(0, 0, 0, 0.25);
  border-radius: 4px;

  margin-top: 20px;
  padding: 33px 16px 33px 16px;
  width: 100%;
  max-width: 369px;

  ${({ variant }) => FormVariant[variant]}
`;