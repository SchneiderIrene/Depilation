import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import GlobalStyles from "./styles/GlobalStyles"
import App from './App.tsx'
import "./i18n"

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <GlobalStyles />
    <App />
  </StrictMode>,
)
