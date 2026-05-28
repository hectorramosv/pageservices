import { motion } from "framer-motion";
import imagenLaptop from "../img/principal.png"; // <-- AGREGA ESTA LÍNEA EXACTAMENTE AQUÍ

function Hero() {
  return (
    <section className="hero">

      {/* BLOBS DECORATIVOS */}
      <div className="blob blob1"></div>
      <div className="blob blob2"></div>

      {/* CONTENIDO */}
      <div className="hero-container">

        {/* IMAGEN */}
        <motion.div
          className="hero-image"

          initial={{ opacity: 0, x: -100 }}

          animate={{ opacity: 1, x: 0 }}

          transition={{ duration: 1 }}
        >
           <img src={imagenLaptop} alt="Laptop de tecnología" />
        </motion.div>

        {/* TEXTO */}
        <motion.div
          className="hero-content"

          initial={{ opacity: 0, x: 100 }}

          animate={{ opacity: 1, x: 0 }}

          transition={{ duration: 1 }}
        >
          <h1>
            Primeros Auxilios <br />
            Informáticos
          </h1>

          <p>
            Servicio técnico a domicilio de computadoras,
            impresoras, redes y asesoría informática.
          </p>

          <motion.button

            whileHover={{
              scale: 1.1,
              y: -5,
            }}

            whileTap={{
              scale: 0.95,
            }}
          >
            Agenda una visita
          </motion.button>

        </motion.div>

      </div>
    </section>
  );
}

export default Hero;