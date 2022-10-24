import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        scrollbar-color: ${({ theme }) =>
          `${theme.colors.primary} ${theme.colors.primary}`};
    }
    li{
        list-style-type: none;
    }

    
`;
