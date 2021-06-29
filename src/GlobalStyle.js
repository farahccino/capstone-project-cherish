import { createGlobalStyle } from 'styled-components';
import cherish from './images/cherish.gif';

export const GlobalStyle = createGlobalStyle`

:root {

        scroll-behavior: smooth;

        --primary: hsl(30, 90%, 85%);
        --primary-dark: hsl(30, 82%, 59%);
        --primary-transparent: hsl(30, 90%, 85%, 0.3);
        --primary-dark-transparent: hsl(30, 82%, 59%, 0.3);
        
        --secondary: hsl(149, 39%, 61%);
        --secondary-transparent: hsl(149, 39%, 61%, 0.3);
        --secondary-dark: hsl(178, 100%, 25%);
        --secondary-dark-transparent: hsl(178, 100%, 25.1%, 0.5);

        --font: hsla(60, 100%, 97.1%, 0.8);
        --font-shadow: hsl(269, 33%, 76%);
        --font-shadow-medium: hsl(270, 33%, 58%);
        --font-shadow-dark: hsl(270, 50%, 40%);

        --glow: hsl(60, 30%, 100%, 0.2);
        --glow-fade: hsl(15, 82%, 59%, 0.2);
}

*,
*::before,
*::after {
    
    box-sizing: border-box;
    font-family: 'Montserrat';
    font-weight: 300;
}


body {
    background-image: url(${cherish});

    background-size: auto;
    font-size: 1.1rem;
    line-height: 1.5;
    margin: 0 auto;
}

h1 {
    font-family: 'Montserrat';
}

`;
