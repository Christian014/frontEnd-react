import React from 'react';
import ReactDOM from 'react-dom/client';

import { New } from './pages/new';
import theme from './styles/theme';
import { Home } from './pages/home/index';
import { SigUp } from './pages/sigUp/index';
import CreateGlobalStyle from './styles/global';
import { Profile } from './pages/profile/index';
import { ThemeProvider } from 'styled-components';
import { Routes } from './routes/index';


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>

    <ThemeProvider theme = { theme }>
      <CreateGlobalStyle />
      <Routes/>
    </ThemeProvider>

  </React.StrictMode>,
)
