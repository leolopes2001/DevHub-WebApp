import styled from 'styled-components';

export const ListStyled = styled.ul`
  padding: 22px 19px;

  width: 100%;
  max-height: 416.37px;
  min-height: 416.37px;

  background: ${({theme}) => theme.colors.grey3};
  border-radius: 4px;

  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-top: 29px;
  overflow-y: scroll;
  position: relative;
  
`;

export const EmptyLi = styled.li`
  color: white;
  position: absolute;
  font-size: 1.2rem;
  text-align: center;
  top: 40%;
  left: 50%;
  transform: translate(-50%);
`;
