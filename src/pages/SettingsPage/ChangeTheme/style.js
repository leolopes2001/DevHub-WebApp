import styled from 'styled-components';

export const MainStyled = styled.main`
  width: 100%;
  max-width: 600px;
  margin: 0 auto;
  min-height: 50vh;
  display: flex;
  align-items: center;
  justify-content: center;

  svg {
    font-size: 1.8rem;
  }
  svg:nth-child(3) {
    color: yellow;
    margin-left: 0.6rem;
  }
  svg:nth-child(1) {
    margin-right: 0.6rem;
    color: pink;
  }
`;
