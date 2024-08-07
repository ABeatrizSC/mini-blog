import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    }

    html {
        height: 100%;
        font-family: ${props => props.theme.fontFamily.poppins};
        font-weight: 500;
        background-color: ${props => props.theme.colors.blackBackground};
        color: ${ props => props.theme.colors.text};
    }

    body {
        min-height: 100vh;
        }
        
    h1 {
        font-size: 30px;
    }

    h2 {
        font-size: 20px;
    }

    p, span, a, li, label, input, button {
        font-size: 16px;
    }

    ul, li {
        list-style: none;
    }

    a {
        text-decoration: none!important;
        color: ${props => props.theme.colors.primary};
    }

    input, textarea {
        padding: 10px 15px;
        border-radius: 7px;
        border: none;
        width: 100%;
        border: none;
        outline: 0;
        font-family: inherit;
        font-size: inherit;
    }
`;