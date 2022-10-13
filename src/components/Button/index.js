import styled, { css } from 'styled-components';

export const ButtonType = {
  default: css`
    font-weight: 600;
    font-size: 12px;
    line-height: 28px;

    color: #f8f9fa;

    padding: 0px 16.2426px;

    height: 40.11px;

    
    background: #212529;
  `,
  login: css`
    background-color: ${({ theme }) => theme.colors.primary};

    padding: 0px 22.3336px;

    min-width: 100%;
    min-height: 48px;

    background: #ff577f;

    border: 1.2182px solid #ff577f;

    font-weight: 500;
    font-size: 16px;
    line-height: 26px;

    color: #ffffff;
  `,
  register: css`
    padding: 0px 22.3336px;

    min-width: 100%;
    min-height: 48px;

    border: 1.2182px solid #59323f;

    order: 9;
    flex-grow: 0;

    font-weight: 500;
    font-size: 16px;
    line-height: 26px;

    color: #ffffff;
    background-color: #ff577f;

    &:hover {
      background: #59323f;
    }
  `,
  addTech: css`
    min-width: 100%;
    min-height: 48px;

    background: #ff577f;
    border-radius: 4px;
    color: #ffff;
    border: 1.2182px solid #ff577f;

    font-weight: 500;
    font-size: 16px;
    line-height: 26px;
  `,

  deleteTech: css`
    width: 98px;
    min-height: 48px;

    background: #868e96;

    border: 1.2182px solid #868e96;
    border-radius: 4px;

    font-weight: 500;
    font-size: 16px;
    line-height: 26px;

    color: #ffffff;
  `,

  btnOpenModal: css`
    min-width: 32px;
    min-height: 32px;
    background: #212529;
    border-radius: 4px;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #ffff;
    font-size: 1.4rem;
  `,
};

export const ButtonStyled = styled.button`
  font-family: 'Inter';
  font-style: normal;
  transition: 0.4s;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  border: none;
  background-color: transparent;
  border-radius: 4px;


  ${({ variant }) => ButtonType[variant || 'default']}
  
`;
