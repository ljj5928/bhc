import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {HashRouter} from 'react-router-dom'
import Home from './router/Home'

createRoot(document.getElementById('root')).render(
  <StrictMode>
   <HashRouter>
    <Home/>
   </HashRouter>
  </StrictMode>,
)
