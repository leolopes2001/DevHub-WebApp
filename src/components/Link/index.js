import { Link } from 'react-router-dom';
import styled, { css } from 'styled-components';

export const LinkType = {
  default: css`
    font-weight: 600;
    font-size: 12px;
    line-height: 28px;

    color: #f8f9fa;

    padding: 0px 16.2426px;

    height: 40.11px;

    background: #212529;
   
  `,

  register: css`
    padding: 0px 22.3336px;

    min-width: 100%;
    min-height: 48px;
    

    background: #868e96;

    border: 1.2182px solid #868e96;

    font-weight: 500;
    font-size: 16px;
    line-height: 26px;

    color: #f8f9fa;
  `,
};

export const LinkStyled = styled(Link)`
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
  text-decoration: none;

  ${({ variant }) => LinkType[variant || "default"]}
`;
