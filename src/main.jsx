import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import CssBaseline from '@mui/material/CssBaseline';
import Theme from './Theme'
import { ThemeProvider } from '@mui/material/styles';

import { BrowserRouter } from 'react-router-dom'

ReactDOM.render(
  <ThemeProvider theme={Theme}>
  <React.StrictMode>
    <CssBaseline />
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
  </ThemeProvider>,
  document.getElementById('root')
)
