import styled, { css } from 'styled-components';

interface iInputStyled {
  borderActive?: string;
  id?:
    | 'name'
    | 'email'
    | 'password'
    | 'bio'
    | 'contact'
    | 'course_module'
    | 'old_password'
    | 'confirmPassword'
    | 'techName';
  type: 'text' | 'email' | 'number' | 'password';
}

export const InputStyled = styled.input<iInputStyled>`
  padding: 0px 12.9865px;

  width: 100%;
  height: 48px;

  background: ${({ theme }) => theme.colors.grey2};

  border: 0.973988px solid ${({ theme }) => theme.colors.grey2};
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
  font-weight: ${({ theme }) => theme.font.weight6};
  font-size: ${({ theme }) => theme.font.size2};
  line-height: ${({ theme }) => theme.font.height2};
  color: ${({ theme }) => theme.colors.grey0};

  &::placeholder {
    font-family: 'Inter';
    font-style: normal;
    font-weight: ${({ theme }) => theme.font.weight6};
    font-size: ${({ theme }) => theme.font.size2};
    line-height: ${({ theme }) => theme.font.height2};
    color: ${({ theme }) => theme.colors.grey1};
  }
`;
