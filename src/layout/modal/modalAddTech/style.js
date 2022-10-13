import styled from "styled-components";

export const ModalStyled = styled.div`
  width: 100%;
  height: 100vh;
  position: fixed;
  inset: 0;
  z-index: 101;

  .overlay {
    width: 100%;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .content {
    padding: 68px 22px 32px;

    position: relative;

    max-width: 369px;
    max-height: 342px;

    background: #212529;
    box-shadow: 0px 4px 40px -10px rgba(0, 0, 0, 0.25);
    border-radius: 4px;
  }
`;

export const divHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 12px 20px;

  width: 100%;
  min-height: 50px;


  border-radius: 4px 4px 0px 0px;
  background: #343b41;

  background-color: red;
`;

export const divInputName = styled.div`
  color: red;
`

export const divSelect = styled.div`
  color: red;
`


