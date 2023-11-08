import React from 'react'
import ReactDOM from 'react-dom/client'

import { Home } from './pages/home/index'
import { ThemeProvider } from 'styled-components'
import { SigUp } from './pages/sigUp/index'
import { Profile } from './pages/profile/index'
import theme from './styles/theme'
import CreateGlobalStyle from './styles/global'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>

    <ThemeProvider theme = { theme }>
      <CreateGlobalStyle />
      <Profile/>
    </ThemeProvider>

  </React.StrictMode>,
)
