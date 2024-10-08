import CopyEmailBtn from "../components/CopyEmailBtn"
import { LinkedInIcon, GitHubIcon } from "../globals/SocialIcons"

function Contact() {
 const githubLink = "https://github.com/MGravitee";
 const linkedInLink = "https://www.linkedin.com/in/matt-gravitee/"
  
  return (
      <section  id="contact" className="contact">
              <div className="contact-heading">
                <h2 className="">Get in Touch</h2>
              </div>
              <div className="social-links">
                <a href={linkedInLink} target="_blank">
                  <LinkedInIcon size={40}/>
                </a>
                <a href={githubLink} target="_blank">
                  <GitHubIcon size={40}/>
                </a>
                <CopyEmailBtn />
              </div>
            </section>

  )
}
export default Contact