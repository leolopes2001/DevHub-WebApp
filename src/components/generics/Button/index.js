import styled, { css } from 'styled-components';

export const ButtonType = {
  default: css`
    font-weight: ${({ theme }) => theme.font.weight4};
    font-size: ${({ theme }) => theme.font.size3};
    line-height: ${({ theme }) => theme.font.height1};

    color:${({ theme }) => theme.colors.grey0};

    padding: 0px 16.2426px;

    height: 40.11px;

    background: ${({ theme }) => theme.colors.grey3};
  `,
  login: css`
    background-color: ${({ theme }) => theme.colors.primary};

    padding: 0px 22.3336px;

    min-width: 100%;
    min-height: 48px;

    background: ${({ theme }) => theme.colors.primary};

    border: 1.2182px solid ${({ theme }) => theme.colors.primary};

    color: ${({ theme }) => theme.colors.whiteFixed};
  `,
  register: css`
    padding: 0px 22.3336px;

    min-width: 100%;
    min-height: 48px;

    border: 1.2182px solid ${({ theme }) => theme.colors.primaryNegative};

    color: ${({ theme }) => theme.colors.whiteFixed};
    background: ${({ theme }) => theme.colors.primary};

    &:hover {
      background: ${({ theme }) => theme.colors.primaryNegative};
    }
  `,
  addTech: css`
    min-width: 100%;
    min-height: 48px;

    background: ${({ theme }) => theme.colors.primary};

    border-radius: 4px;
    color: #ffff;
    border: 1.2182px solid ${({ theme }) => theme.colors.primary};
  `,

  deleteTech: css`
    width: 98px;
    min-height: 48px;

    background: ${({ theme }) => theme.colors.grey1};

    border: 1.2182px solid ${({ theme }) => theme.colors.grey1};
    border-radius: 4px;

    color: ${({ theme }) => theme.colors.whiteFixed};
  `,

  btnOpenModal: css`
    min-width: 32px;
    min-height: 32px;
    background: ${({ theme }) => theme.colors.grey3};
    border-radius: 4px;
    display: flex;
    justify-content: center;
    align-items: center;
    color: ${({ theme }) => theme.colors.whiteFixed};
    font-size: 1.4rem;
  `,

  btnCloseModal: css`
    font-weight: ${({ theme }) => theme.font.weight4};

    color: ${({ theme }) => theme.colors.grey1};
  `,
  saveChange: css`
    width: 100%;
    max-width: 204px;
    min-height: 48px;

    background: ${({ theme }) => theme.colors.primary};
    border-radius: 4px;
    color: ${({ theme }) => theme.colors.whiteFixed};
    border: 1.2182px solid ${({ theme }) => theme.colors.primary};
  `,
};

export const ButtonStyled = styled.button`
  font-family: 'Inter';
  font-style: normal;
  transition: 0.3s;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  border: none;
  background-color: transparent;
  border-radius: 4px;
  font-weight: ${({ theme }) => theme.font.weight5};
  font-size: ${({ theme }) => theme.font.size2};
  line-height: ${({ theme }) => theme.font.height2};

  &:hover {
    filter: brightness(1.2);
  }

  ${({ variant }) => ButtonType[variant || 'default']}
`;
