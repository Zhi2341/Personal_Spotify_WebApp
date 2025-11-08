import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './css/index.css'
import './css/DarkVeil.css'
import App from "./App.tsx"; `./BackGroundDarkVeil`

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    < App />
  </StrictMode>,
)
