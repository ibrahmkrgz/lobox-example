import React from 'react';
import { render } from 'react-dom';
import { ThemeProvider } from 'emotion-theming';
import { ApolloProvider } from '@apollo/client';
import App from './App';
import theme from './utils/theme';
import client from './state/client';

const appRoot = document.getElementById('app');

render(
  <ApolloProvider client={client}>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </ApolloProvider>,
  appRoot,
);
