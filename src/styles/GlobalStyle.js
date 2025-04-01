import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
    @import url('https://fonts.googleapis.com/css2?family=Sarala:wght@400;700&family=Raleway:wght@400;700&display=swap');

    * {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
        font-family: 'Sarala', sans-serif;
    }

    body {
        background-color: #212226;
        color: #FFFFFF;
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
            outline: 2px solid #EE897F;
            border-color: transparent !important;
        }
    }

    #root {
        padding-top: 70px;
        min-height: 100vh;
    }

    main {
        width: 100%;
        max-width: 800px;
        margin: 0 auto;
        padding: 20px;
    }
`;

export default GlobalStyle;