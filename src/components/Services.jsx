import { motion } from "framer-motion";
import imagenmantenmiento from "../img/mantenimiento1.png"; 
import imagenmantenmiento2 from "../img/mantenimiento2.png"; 

// Recibimos la prop setTarjetaSeleccionada desde App.jsx
function Services({ setTarjetaSeleccionada }) {
  return (
    <section className="services">

      <motion.h2
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        Servicios
      </motion.h2>

      <div className="cards">

        {/* CARD 1 - MANTENIMIENTO */}
        <motion.div
          className="card"
          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          whileHover={{
            scale: 1.05,
            y: -10,
          }}
          onClick={() => setTarjetaSeleccionada({
            // SECCIÓN 1 (Arriba)
            titulo: "Mantenimiento Preventivo de PC/Laptop",
            imagen: imagenmantenmiento, 
            textoDetallado: "Ofrecemos una limpieza física profunda de tus equipos informáticos. Incluye la remoción de polvo acumulado en ventiladores y disipadores, cambio de pasta térmica de alta calidad para procesador y tarjeta gráfica, y optimización de componentes para evitar sobrecalentamientos futuros.",
            
            // NUEVO: SECCIÓN 2 DUPLICADA (Abajo)
            titulo2: "Removemos el polvo de tu Dispositivo ",
            imagenDuplicado: imagenmantenmiento2, 
            textoDetallado2: "Solucionamos fallas opereqwewqeqativas directas en tu computadora. Diagnóstico y cambio de piezas dañadas (pantallas, teclados, fuentes de poder), reparación de placas base, solución a pantallazos azules de Windows y recuperación de sistemas colapsados."
          })}
        >
          <h3>Mantenimientos de Pc/Laptop</h3>
          <p>
            Mantenimiento preventivo y correctivo de equipos informáticos.
          </p>
        </motion.div>

        {/* CARD 2 - CIBERSEGURIDAD */}
        <motion.div
          className="card"
          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          whileHover={{
            scale: 1.05,
            y: -10,
          }}
          onClick={() => setTarjetaSeleccionada({
            titulo: "Ciberseguridad",
            imagen: "/img/fondohero.jpg",
            textoDetallado: "Protegemos tus sistemas informáticos y datos empresariales o personales contra amenazas digitales. Realizamos eliminación avanzada de virus, malware y ransomware, configuración de firewalls, auditorías de seguridad e implementación de copias de seguridad automáticas."
          })}
        >
          <h3>Ciberseguridad</h3>
          <p>
            Protección de sistemas y auditorías de seguridad.
          </p>
        </motion.div>

        {/* CARD 3 - REPOTENCIACIÓN */}
        <motion.div
          className="card"
          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          whileHover={{
            scale: 1.05,
            y: -10,
          }}
          onClick={() => setTarjetaSeleccionada({
            titulo: "Repotenciación de equipos informáticos",
            imagen: "/img/fondohero.jpg",
            textoDetallado: "Le devolvemos la velocidad y la potencia a tu computadora o laptop lenta mediante la actualización estratégica de componentes. Realizamos instalación de unidades de estado sólido (SSD), expansión de memoria RAM y mejoras de procesador para que trabajes sin interrupciones."
          })}
        >
          <h3>Repotenciación de equipos informáticos</h3>
          <p>
            Mejora de rendimiento del computador mediante reemplazo de componentes.
          </p>
        </motion.div>

        {/* CARD 4 - SOPORTE TÉCNICO */}
        <motion.div
          className="card"
          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2 }}
          viewport={{ once: true }}
          whileHover={{
            scale: 1.05,
            y: -10,
          }}
          onClick={() => setTarjetaSeleccionada({
            titulo: "Soporte técnico",
            imagen: "/img/fondohero.jpg",
            textoDetallado: "Brindamos asistencia técnica inmediata para resolver problemas de software and hardware. Ofrecemos soporte presencial a domicilio o soporte remoto para instalación de programas licenciados, solución a errores del sistema operativo (pantallas azules) y configuración de redes locales."
          })}
        >
          <h3>Soporte técnico</h3>
          <p>
            Asistencia presencial o remota.
          </p>
        </motion.div>

      </div>
    </section>
  );
}

export default Services;
