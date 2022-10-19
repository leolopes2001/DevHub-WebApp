import styled from 'styled-components';

export const ModalStyled = styled.div`
  width: 100%;
  height: 100vh;
  position: fixed;
  inset: 0;
  z-index: 101;

  .overlay {
    width: 100%;
    height: 100vh;
    background-color: rgba(0, 0, 0, 0.8);
  }

  .content {
    position: absolute;

    left: 50%;
    transform: translateX(-50%);
    width: 100%;
    max-height: 362px;
    min-height: 365px;
    max-width: 369px;

    background: ${({ theme }) => theme.colors.grey3};
    box-shadow: 0px 4px 40px -10px rgba(0, 0, 0, 0.25);
    border-radius: 4px;
  }
`;

export const BoxHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 12px 20px;

  width: 100%;
  min-height: 50px;
  max-height: 50px;
  border-radius: 4px 4px 0px 0px;
  background: ${({theme}) => theme.colors.grey2};
  color: ${({theme}) => theme.colors.whiteFixed};
`;

export const BoxInputName = styled.div`
  display: flex;
  flex-direction: column;

  label {
    text-align: start;
    width: 100%;
  }
  p {
    margin-top: 12px;
    color: red;
    text-align: start;
    width: 100%;
  }
`;

export const BoxSelect = styled.div`
  display: flex;
  flex-direction: column;

  label {
    width: 100%;
  }

  select {
    width: 100%;
  }
`;

export const BoxPadding = styled.div`
  padding: 1rem;
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;
