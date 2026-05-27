import { motion } from "framer-motion"

function Services() {
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
        >
          <h3>Mantenimientos de Pc/Laptop</h3>

          <p>
            Mantenimiento preventivo y correctivo de equipos informáticos.
          </p>
        </motion.div>

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
        >
          <h3>Ciberseguridad</h3>

          <p>
            Protección de sistemas y auditorías de seguridad.
          </p>
        </motion.div>

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
        >
          <h3>Repotenciación de equipos informáticos</h3>

          <p>
            Mejora de rendimiento del computador mediante reemplazo de componentes.
          </p>
        </motion.div>

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