import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { CountriesListProvider } from './context/countriesContext.tsx'
import './index.css'
import App from './App.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
    <CountriesListProvider>
      <App />
    </CountriesListProvider>
      
    </BrowserRouter>
    
  </StrictMode>,
)
