import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter as Router } from 'react-router-dom';
import { createGlobalStyle, ThemeProvider } from 'styled-components';
import { theme } from './theme';

const GlobalStyle = createGlobalStyle`
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  position: relative;
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
  <Router>
    <GlobalStyle />
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </Router>,
  document.getElementById('root')
);
