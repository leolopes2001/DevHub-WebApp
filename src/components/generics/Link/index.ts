import { ReactNode } from 'react';
import { Link } from 'react-router-dom';
import styled, { css } from 'styled-components';

interface iLinkStyled {
  variant: 'default' | 'register' | 'navLink' | 'settings';
  whichisactive?: string;
  children: ReactNode;
  to: string;
}

interface iNavLink {
  whichisactive: string;
  children: ReactNode[];
}

export const LinkType: { [key: string]: any } = {
  default: css`
    font-weight: ${({ theme }) => theme.font.weight4};
    font-size: ${({ theme }) => theme.font.size4};
    line-height: ${({ theme }) => theme.font.height1};

    color: ${({ theme }) => theme.colors.grey0};

    padding: 0px 16.2426px;

    height: 40.11px;

    background: ${({ theme }) => theme.colors.grey3};
  `,

  register: css`
    padding: 0px 22.3336px;

    min-width: 100%;
    min-height: 48px;

    background: ${({ theme }) => theme.colors.grey1};

    border: 1.2182px solid ${({ theme }) => theme.colors.grey1};

    font-weight: ${({ theme }) => theme.font.weight5};
    font-size: ${({ theme }) => theme.font.size2};
    line-height: ${({ theme }) => theme.font.height2};

    color: ${({ theme }) => theme.colors.grey0};
  `,

  navLink: css`
    font-weight: ${({ theme }) => theme.font.weight5};
    font-size: ${({ theme }) => theme.font.size2};
    line-height: ${({ theme }) => theme.font.height2};

    color: ${({ theme }) => theme.colors.grey0};
    text-align: center;
    gap: 0.3rem;
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;

    width: 60px;
    svg {
      font-size: 1.6rem;
    }
    ${({ whichisactive, children }: iNavLink) => {
      if (children[1] === whichisactive) {
        return css`
          text-align: center;
          color: ${({ theme }) => theme.colors.primary};
        `;
      }
    }}
  `,

  settings: css`
    color: ${({ theme }) => theme.colors.grey0};
    font-size: 1.2rem;

    &:hover {
      color: ${({ theme }) => theme.colors.primary};
    }
  `,
};

export const LinkStyled = styled(Link)<iLinkStyled>`
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

  ${({ variant }) => LinkType[variant]}
`;
