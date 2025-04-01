import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
    * {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
    }

    body {
        font-family: 'Roboto', sans-serif;
        background-color: #FFFFFF;
    }

    button {
        cursor: pointer;
    }

    #root {
        padding-top: 70px;  // Para compensar o header fixo
    }
`;

export default GlobalStyle;