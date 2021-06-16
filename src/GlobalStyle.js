import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`

:root {
        --primary: hsl(30, 90%, 85%);
        --primary-dark: hsl(30, 82%, 59%);
        --primary-transparent: hsl(30, 90%, 85%, 0.3);
        
        --secondary: hsl(149, 39%, 61%);
        --secondary-dark: hsl(178, 100%, 25%);
        --secondary-transparent: hsl(149, 39%, 61%, 0.3);
}

*,
*::before,
*::after {
    box-sizing: border-box;
}

body {
    background-color: ivory;
    background-repeat: no-repeat;
    background-size: cover;
    font-size: 1.1rem;
    font-family: 'Roboto';
    line-height: 1.5;
    margin: 0;
}

`;