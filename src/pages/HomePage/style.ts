import styled from 'styled-components';

import { ContainerHome } from '../../layout/Containers/style';

export const Header = styled.header`
  border-bottom: 1px solid ${({theme}) => theme.colors.grey3};
`;

export const ContainerHeader = styled(ContainerHome)`
  flex-direction: row;
  justify-content: space-between;
`;
export const ContainerProfile = styled(ContainerHome)`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin: 0.6rem auto;
  p,
  h4 {
    margin: 0;
    text-align: start;

  }

  @media (max-width: 480px){
    flex-direction: column;
    justify-content: flex-start;
    text-align: start;
    align-items: flex-start;
  }
 
`;

export const ContainerMain = styled(ContainerHome)`
  height: 100%;
  color: white;
  div {
    display: flex;
    justify-content: space-between;
    width: 100%;
    align-items: center;
  }
`;

export const SectionProfile = styled.section`
  border-bottom: 1px solid ${({theme}) => theme.colors.grey3};
`;
