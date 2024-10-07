import { AnimatedText } from "../components/AnimatedText";

function Hero() {
  return (
        <section id="home" className="hero-section">
       <h1 className="hero-heading">Matt Gravitee</h1>
          <AnimatedText
            el="h2"
            text={[
              "UI / UX Designer",
            ]}
            className="anim-text design-color"
            repeatDelay={10000}
          />
          <AnimatedText
            el="h2"
            text={[
              "Front-End Developer",
            ]}
            className="anim-text dev-color"
            repeatDelay={10000}
          />
        </section>
  );
}

export default Hero;
