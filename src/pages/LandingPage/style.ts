import styled from 'styled-components';

export const Main = styled.main`
  min-height: 100vh;
  max-height: 100vh;
  min-width: 100vw;
  max-width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;

  @media (min-width: 1150px) {
    flex-direction: row;
  }
`;

export const DivTitle = styled.div`
  color: ${({theme}) => theme.colors.whiteFixed};
  gap: 0.5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 2rem;
  text-align: center;
  a {
    margin-top: 3rem;
    width: 100%;
    height: 48px;
  }
  img {
    width: 200px;
  }

  @media (min-width: 1150px) {
    font-size: 3rem;
    margin-left: 4rem;

    img {
      width: 270px;
      text-align: center;
    }
  }
`;

export const DivImg = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  max-width: 850px;
  height: 100%;
  text-align: center;
  img {
    width: 50%;
  }

  @media (min-width: 690px) {
    img {
      width: 40%;
    }
  }
`;
