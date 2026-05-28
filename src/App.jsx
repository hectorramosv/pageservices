import { useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Info from "./components/Info";
import Services from "./components/Services";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  // 1. Estado para guardar la información de la tarjeta activa
  const [tarjetaSeleccionada, setTarjetaSeleccionada] = useState(null);

  return (
    <div className="capa-aislante">
      <Navbar />
      <Hero />
      <Info />

      {/* 2. Pasamos la prop setTarjetaSeleccionada a tu componente Services */}
      <Services setTarjetaSeleccionada={setTarjetaSeleccionada} />

      <Contact />
      <Footer />

      {/* 3. VISTA EMERGENTE GLOBAL */}
      {tarjetaSeleccionada && (
        <div className="vista-emergente-overlay" onClick={() => setTarjetaSeleccionada(null)}>
          <div className="vista-emergente-content" onClick={(e) => e.stopPropagation()}>
            <button className="boton-cerrar" onClick={() => setTarjetaSeleccionada(null)}>×</button>
            
            {/* CONTENEDOR VERTICAL GLOBAL DE LAS SECCIONES */}
            <div className="modal-wrapper-vertical" style={{ display: 'flex', flexDirection: 'column', gap: '30px', width: '100%' }}>
              
              {/* === PRIMERA SECCIÓN (IMAGEN IZQ - TEXTO DER) === */}
              <div className="modal-bloque-fila" style={{ display: 'flex', flexDirection: 'row', alignItems: 'stretch', gap: '35px', width: '100%' }}>
                
                {/* LADO IZQUIERDO: Una sola imagen fija (Movido aquí para que sea la primera) */}
                <div className="contenedor-reel">
                  <img src={tarjetaSeleccionada.imagen} alt={tarjetaSeleccionada.titulo} />
                </div>

                {/* LADO DERECHO: Título y texto de la primera sección */}
                <div className="vista-emergente-info">
                  <h2>{tarjetaSeleccionada.titulo}</h2>
                  <p>{tarjetaSeleccionada.textoDetallado}</p>
                </div>

              </div>

              {/* MUESTRA LA SEGUNDA SECCIÓN EN PANTALLA SOLO SI TIENE UN DUPLICADO ASIGNADO */}
              {tarjetaSeleccionada.titulo2 && (
                <>
                  {/* LÍNEA DIVISORIA ESTÉTICA ENTRE BLOQUES */}
                  <hr style={{ border: 'none', borderTop: '1px solid rgba(210, 244, 233, 0.15)', margin: '0' }} />

                  {/* === SEGUNDA SECCIÓN (TEXTO IZQ - IMAGEN DER) === */}
                  <div className="modal-bloque-fila" style={{ display: 'flex', flexDirection: 'row', alignItems: 'stretch', gap: '35px', width: '100%' }}>
                    
                    {/* LADO IZQUIERDO: Título y texto de la segunda sección */}
                    <div className="vista-emergente-info">
                      <h2>{tarjetaSeleccionada.titulo2}</h2> 
                      <p>{tarjetaSeleccionada.textoDetallado2}</p> 
                    </div>

                    {/* LADO DERECHO: Imagen de la segunda sección */}
                    <div className="contenedor-reel">
                      <img src={tarjetaSeleccionada.imagenDuplicado} alt={tarjetaSeleccionada.titulo2} /> 
                    </div>

                  </div>
                </>
              )}

              {/* === BOTÓN AL FINAL DE TODO EL CONTENIDO === */}
              <div style={{ display: 'flex', justifyContent: 'center', width: '100%', marginTop: '10px' }}>
                <button 
                  className="btn-modal-contacto"
                  onClick={() => window.open(`https://wa.me{encodeURIComponent(tarjetaSeleccionada.titulo)}`, '_blank')}
                >
                  Solicitar Servicio
                </button>
              </div>

            </div> {/* Cierre del modal-wrapper-vertical */}
            
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
