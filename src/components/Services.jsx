import { motion } from "framer-motion";

const REFS_SERVICES = [
  {
    id: "mant",
    titulo: "Soporte Técnico",
    desc: "Mantenimiento preventivo y correctivo inmediato de laptops y PCs.",
    claseColor: "card-dark",
    icono: "💻"
  },
  {
    id: "ciber",
    titulo: "Ciberseguridad",
    desc: "Protección contra virus, malware y auditorías completas de sistemas.",
    claseColor: "card-orange",
    icono: "🛡️"
  },
  {
    id: "repot",
    titulo: "Repotenciación",
    desc: "Instalación de discos SSD y expansión de memoria RAM al instante.",
    claseColor: "card-teal",
    icono: "🚀"
  },
  {
    id: "infra",
    titulo: "Redes & Conectividad",
    desc: "Configuración de enrutadores, cableado estructurado y redes locales.",
    claseColor: "card-purple",
    icono: "🌐"
  }
];

function Services({ setTarjetaSeleccionada }) {
  return (
    <section className="services" id="services">
      <div className="cards-grid">
        {REFS_SERVICES.map((serv, index) => (
          <motion.div
            key={serv.id}
            className={`custom-card ${serv.claseColor}`}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            whileHover={{ y: -12, scale: 1.02 }}
            onClick={() => setTarjetaSeleccionada(serv)}
          >
            <div className="card-icon-wrapper">{serv.icono}</div>
            <h3>{serv.titulo}</h3>
            <p>{serv.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default Services;
