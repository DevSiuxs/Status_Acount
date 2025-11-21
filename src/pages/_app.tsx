import SidebarLeft from "../components/SidebarLeft/SidebarLeft"
import type { AppProps } from "next/app"
import "../styles/globals.css"

// Importa los nuevos componentes
import DatosContrato from "../components/DatosContrato/DatosContrato"
import EstadoCuenta from "../components/EstadoCuenta/EstadoCuenta"

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div className="app-container">
      {/* Sidebar izquierdo */}
      <div className="sidebar-container">
        <SidebarLeft />
      </div>
      
      {/* Contenido principal - Solo los dos componentes nuevos */}
      <main className="main-content-grid">
        <div className="component-grid">
          {/* Componente 1: Datos del Contrato */}
          <div className="grid-item">
            <DatosContrato />
          </div>
          
          {/* Componente 2: Estado de Cuenta */}
          <div className="grid-item">
            <EstadoCuenta />
          </div>
        </div>
        <Component {...pageProps} />
      </main>
    </div>
  )
}

export default MyApp