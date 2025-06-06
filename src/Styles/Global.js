
import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  :root {
    /* Color Variables */
    --primary-color: #2424D8;
    --secondary-color: #08B39F;
    --background-color: #242424;
    --text-color: #fcfcfc;
    --text-secondary-color: #6c757d;

    /* Status Color Variables */
    --success-color: #28a745;
    --warning-color: #ffc107;
    --danger-color: #dc3545;
    --info-color: #AC5CCC;
  }

  body {
    background-color: var(--background-color);
    color: var(--text-color);
    font-size: 1rem;
    font-weight: 400;
    font-family: 'Montserrat','Montserrat Alternates','Arial', sans-serif;
  }
  
  ul { list-style: none; }
  a { text-decoration: none; color: inherit; }
  button { cursor: pointer; }
  input, textarea { outline: none; }
`;

export default GlobalStyle;