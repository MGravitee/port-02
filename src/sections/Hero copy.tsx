import { motion } from "framer-motion";

function Hero() {
  const name = "Matt Garvey".split(" ");
    const text = "UI + UX Designer | Front-End Developer".split(" ");
  return (
    <section className="hero">
      {name.map((el, i) => (
        <motion.h1 className="hero-heading"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            duration: 3,
            delay: i / 10,
          }}
          key={i}
        >
          {el}{" "}
        </motion.h1>
      ))}
      {text.map((el, i) => (
        <motion.h2 className="hero-subheading"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            duration: 3,
            delay: i / 10,
          }}
          key={i}
        >
          {el}{" "}
        </motion.h2>
      ))}
    </section>
  );
}

export default Hero;