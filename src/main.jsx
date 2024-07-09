import React from 'react'
import ReactDOM from 'react-dom/client'
import { App } from './App.jsx'
import { GlobalStyle } from "./assets/styles/global"
import { Theme } from "./assets/styles/Theme"

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Theme>
      <GlobalStyle />
      <App />
    </Theme>
  </React.StrictMode>,
)