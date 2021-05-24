// ============================================================
// This should be placed at the top level of the application.
// ============================================================
import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
    /* css variables ----> helpful in reducing repetition */
    :root {
     /* colors */
     --color-white: #fff;
     --color-dark-blue: #233240;
     --color-dark-gray: #808080;
     --color-blue: #0D05F2;
     --color-gray: #F0F0F2;
     --color-green: #078C03;
     --color-yellow: #F2E205;
     --color-red: #F22E2E;

     /* fonts */
     --font-primary: 'Mulish', sans-serif;

     /* box-shadows */
     --box-shadow-1: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
     --box-shadow-2: 0px 6px 12px rgba(0, 0, 0, 0.12);

     /* transitions */
     --transition-1: 0.3s all ease-in-out;
    }

    /* Css resets */
    *,
    *::before,
    *::after {
      margin: 0;
      padding: 0;
      box-sizing: inherit;
    }

    *:focus {
      outline: none;
    }

    html {
     box-sizing: border-box;
     font-size: 62.5%; /* 10px / 16px = 62.5% , therefore 1rem = 10px */
   }

   body {
     background-color: var(--color-gray);
     color: var(--text-color);
     font-family: var(--font-primary);
     font-size: 1.5rem;
     font-weight: 400;
     line-height: 1.5;
     overflow-x: hidden;
     position: relative;
   }

   h1, h2, h3, h4 {
     color: var(--color-dark-blue);
     font-family: var(--font-primary);
   }

   h1, h2 {
     font-weight: 600;
   }

   a {
     text-decoration: none;
     cursor: pointer;
     color: currentColor;
   }

   ul {
     list-style: none;
   }

   img {
     max-width: 100%;
     display: block;
     max-height: 100%;
     object-fit: cover;
   }

   input,
   button,
   select,
   textarea {
     font-family: inherit;
     font-weight: inherit;
     outline: 0;
     border: 0;
     color: inherit;
   }

   input::placeholder {
     font-size: 1.2rem;
   }
`;

export default GlobalStyles;
