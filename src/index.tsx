import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { createGlobalStyle, ThemeProvider } from 'styled-components';
import { theme } from './theme';

const GlobalStyle = createGlobalStyle`
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  min-height: 100vh;
  width: 100vw;
  font-family: 'Roboto', sans-serif;
  font-size: 16px;
  background-color: #ECF9FE
}

#root {
  width: 100%;
  height: 100vh;
}

h1,
h2,
h3,
h4,
h5,
h6 {
  font-family: 'Roboto', sans-serif;
}

p {
  font-family: 'Roboto', sans-serif;
  font-size: 18px;
}
`;

ReactDOM.render(
  <>
    <GlobalStyle />
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </>,
  document.getElementById('root')
);
