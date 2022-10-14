import styled, { css } from 'styled-components';

const FormVariant = {
  register: css`
    margin-bottom: 4rem;
    p  {
      margin-bottom: 1.3rem;
    }
  `,
};

export const Form = styled.form`
  background: #212529;
  box-shadow: 0px 4px 40px -10px rgba(0, 0, 0, 0.25);
  border-radius: 4px;

  margin-top: 20px;
  padding: 33px 16px 33px 16px;
  width: 100%;
  max-width: 369px;



  ${({ variant }) => FormVariant[variant]}
`;
