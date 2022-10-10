import styled, { keyframes } from 'styled-components';

import { Background } from '../style';

const rotating = keyframes`
    from{
        transform: rotate(0deg);
    }
    to{
        
        transform: rotate(360deg);
    }
`;

export const ContainerLoading = styled(Background)`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  width: 100%;
  position: fixed;
  background-color: black;
  top: 0;
  left: 0%;
  z-index: 1000;
  color: #ffff;

  div {
    flex-direction: column;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 1rem;
  }
`;

export const LoopDiv = styled.div`
  border-right: 3px solid red;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  
  animation-name: ${rotating};
  animation-timing-function: linear;
  animation-duration: 1s;
  animation-iteration-count: infinite;

`;
