import React from 'react'
import ReactDOM from 'react-dom/client'
import { Primero } from './Primero'
import { Segundo } from './Segundo'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <>
    <Primero/>
    <hr />
    <hr />
    <Segundo/>
    </>
    
  </React.StrictMode>,
)
