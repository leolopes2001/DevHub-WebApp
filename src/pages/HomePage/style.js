import styled from 'styled-components';

import { ContainerHome } from '../../layout/Containers/style';

export const Header = styled.header`
  border-bottom: 1px solid #212529;
`;

export const ContainerHeader = styled(ContainerHome)`
  flex-direction: row;
  justify-content: space-between;
`;
export const ContainerProfile = styled(ContainerHome)`
  flex-direction: column;
  align-items: flex-start;

  p,
  h4 {
    text-align: start;
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
  border-bottom: 1px solid #212529;
`;
