import { createGlobalStyle } from 'styled-components';

const Global = createGlobalStyle`
    html,
    body {
    padding: 0;
    margin: 0;
    font-family: 'Ubuntu', -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
        Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
    font-size: 16px;
    color: var(--natural-color); 
    background: var(--background-color); 
    }

    a {
    color: inherit;
    text-decoration: none;
    }

    * {
    font-family: 'Ubuntu', sans-serif;
    box-sizing: border-box;
    padding: 0;
    margin: 0;
    }
`;

export default Global;
