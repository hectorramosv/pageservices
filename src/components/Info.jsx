import { motion } from "framer-motion";

function Info() {
  return (
    <section className="info">

      <motion.h2

        initial={{
          opacity: 0,
          x: -100,
        }}

        whileInView={{
          opacity: 1,
          x: 0,
        }}

        transition={{
          duration: 1,
        }}

        viewport={{ once: true }}
      >
        ¿Quiénes somos?
      </motion.h2>

      <motion.p

        initial={{
          opacity: 0,
          scale: 0.8,
        }}

        whileInView={{
          opacity: 1,
          scale: 1,
        }}

        transition={{
          duration: 1.2,
        }}

        viewport={{ once: true }}
      >
        Somos una empresa enfocada en tecnología, desarrollo web,
        ciberseguridad y soluciones digitales.
      </motion.p>

    </section>
  );
}

export default Info;