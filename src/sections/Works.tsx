import { GitHubIcon} from "../globals/SocialIcons"
import { ExLinkIC } from "../globals/NavIcons"
import { projects } from "../section-data/projects"


function Works() {

  const { title, featuredWorks } = projects;

  return (
    <section className="projects" id="projects">
      <h2>{title}</h2>
      <div className="container-grid">
        {featuredWorks.map((project, index) => (
          <article className="project-card" key={index}>
            <h3 className="project-title">{project.title}</h3>
            <p className="project-description">{project.short}</p>
            <div className="technology-stack">
              <ul>
              {project.technologies.map((tool, index) => (
                <li className="tech" key={index}>
                  {tool}
                </li>
              ))}
              </ul>
            </div>
            <div className="project-links">
              <a href={project.github} target="_blank"> 
                <GitHubIcon className="icon" size={30}/>
              </a>
              <a href={project.demo} target="_blank">
                <ExLinkIC className="icon" size={30}/>
              </a>
            </div>
          </article>
          
        ))}
      </div>
    </section>
  )
}
export default Works