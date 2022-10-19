import styled from 'styled-components';

export const LiStyled = styled.li`
  width: 100%;
  width: 100%;
  min-height: 49px;
  cursor: pointer;
  background: ${({theme}) => theme.colors.grey4};
  border-radius: 4px;
  padding: 0 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  transition: background 300ms;

  &:hover {
    background: ${({theme}) => theme.colors.grey2};
  }

`;
