import React from 'react'
import ReactDOM from 'react-dom/client'

// Estilos de Bootstrap (framework CSS)
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap"

// Estilos propios del proyecto
import '../styles/index.css'

// Importación del componente principal
import Home from './components/Home';

// Renderizado de la aplicación en el elemento con id "root"
// Se utiliza StrictMode para ayudar a detectar problemas potenciales
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Home/>
  </React.StrictMode>,
)
