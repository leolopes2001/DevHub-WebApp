import styled from 'styled-components';

export const SelectBoxStyled = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 26px;

  select {
    padding: 0px 16.2426px;

    width: 100%;

    height: 48px;

    background: ${({theme}) => theme.colors.grey2};

    border: 1.2182px solid ${({theme}) => theme.colors.grey2};
    border-radius: 4px;

    font-weight: ${({theme}) => theme.font.weight6};
    font-size: 16.2426px;
    line-height: ${({theme}) => theme.font.height2};

    cursor: pointer;
    color: ${({theme}) => theme.colors.grey1};
  }
`;