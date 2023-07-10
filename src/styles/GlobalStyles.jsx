import { createGlobalStyle } from 'styled-components';


const GlobalStyle = createGlobalStyle`
*{
   margin:0;
   padding:0;
   box-sizing: border-box;
   list-style: none; 
}

:root{
    --primary-color: #222260;
    --primary-color2: 'color: rgba(34, 34, 96, .6)';
    --primary-color3: 'color: rgba(34, 34, 96, .4)';
    --color-green: #42AD00;
    --color-grey: #aaa;
    --color-accent: #F56692;
    --color-delete: #FF0000;
    --rt-color-error: #FF0000;
    --rt-color-white: #fff;
    --rt-color-dark: #222;
    --rt-color-success: #8dc572;
    --rt-color-warning: #f0ad4e;
    --rt-color-info: #337ab7;
    --rt-opacity: 0.9;
}

body{
    font-family: 'Nunito', sans-serif;
    font-size: clamp(1rem, 1.5vw, 1.2rem);
    overflow: hidden;
    color: rgba(34, 34, 96, .6);
} 

h1, h2, h3, h4, h5, h6{
    color: var(--primary-color);
}
`;

export default GlobalStyle