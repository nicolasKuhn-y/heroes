import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body { 
        height: 100vh;
        font-family: 'Nunito Sans', sans-serif; 
        line-height: 1.5;
    }

    a{
        color: #F9F9F9; 
        text-decoration: none;
    }

    input,
    button{
        font-family: inherit;
        font-size: inherit;
    }

    button{ border: none; }

    img {
        max-width: 100%;
        height: auto;
    }
`;
