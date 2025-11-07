import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './css/index.css'
import './css/DarkVeil.css'
import DarkVeil from "./BackGroundDarkVeil.tsx"; `./BackGroundDarkVeil`

createRoot(document.getElementById('root')!).render(
  <StrictMode>
      <div style={{ position: "relative", minHeight: "100vh", zIndex: 0 }}>
          <DarkVeil />
      </div>
  </StrictMode>,
)
