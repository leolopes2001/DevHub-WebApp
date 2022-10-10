import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  max-width: 420px;
  margin: 0 auto;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const ContainerLogin = styled(Container)`
  padding-top: 77px;

  header {
    max-width: 369px;
    text-align: center;
  }
`;

export const ContainerRegister = styled(Container)`
  header {
    display: flex;
    justify-content: space-between;
    width: 100%;
    align-items: center;
    max-width: 369px;
    margin-top: 3rem;
    margin-bottom: 1rem;
  }
`;

export const ContainerHome = styled(Container)`
  max-width: 620px;
`;
