import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { ContextoIMC } from '../context/ContextoIMC'


import App from './App.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    
        <ContextoIMC>

            <App />
        </ContextoIMC>
      
    

  </StrictMode>,
)
