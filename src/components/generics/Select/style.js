import styled from 'styled-components';

export const SelectStyled = styled.select`
  padding: 0px 16.2426px;

  width: 100%;

  height: 48px;

  background: ${({ theme }) => theme.colors.grey2};

  border: 1.2182px solid ${({ theme }) => theme.colors.grey2};
  border-radius: 4px;

  font-weight: ${({ theme }) => theme.font.weight6};
  font-size: ${({ theme }) => theme.font.size2};
  line-height: ${({ theme }) => theme.font.height2};

  color: ${({ theme }) => theme.colors.grey1};
  cursor: pointer;
`;
