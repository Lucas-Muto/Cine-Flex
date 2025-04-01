import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
    * {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
        font-family: 'Roboto', sans-serif;
    }

    body {
        background-color: #FFFFFF;
    }

    button {
        cursor: pointer;
        transition: all 0.3s ease;
        
        &:hover {
            filter: brightness(0.95);
        }
        
        &:active {
            transform: scale(0.98);
        }
    }

    input {
        &:focus {
            outline: 2px solid #E8833A;
            border-color: transparent !important;
        }
    }

    #root {
        padding-top: 70px;
        min-height: 100vh;
    }

    /* Estilos para scrollbar personalizada */
    ::-webkit-scrollbar {
        width: 8px;
    }

    ::-webkit-scrollbar-track {
        background: #f1f1f1;
    }

    ::-webkit-scrollbar-thumb {
        background: #E8833A;
        border-radius: 4px;
    }

    ::-webkit-scrollbar-thumb:hover {
        background: #c97432;
    }

    /* Media queries globais */
    @media (max-width: 768px) {
        html {
            font-size: 14px;
        }
    }

    @media (max-width: 480px) {
        html {
            font-size: 12px;
        }
    }
`;

export default GlobalStyle;