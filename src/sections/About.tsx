import { about } from "../section-data/about"
import Stack from "./Stack";

function About() {
  const { title, title2, description1, description2 } = about;

  return (
    <>
      <section id="about" className="about-section">
            <h2 className="about-heading"><span className="design-color">{title}</span> + <span className="dev-color">{title2}</span></h2>
            <p className="about-text">{description1}</p> 
            <p className="about-text">{description2}</p> 

      <Stack />
      </section>
    </>
  )
}
export default About