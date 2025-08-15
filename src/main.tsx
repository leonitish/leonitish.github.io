import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import { AppContextProvide } from './context/Appcontext.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <AppContextProvide>
      <App />
    </AppContextProvide>
  </StrictMode>,
)
