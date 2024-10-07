import { GitHubIcon} from "../globals/SocialIcons"
import { ExLinkIC } from "../globals/NavIcons"
import { projects } from "../section-data/projects"
import ScrollDownAnim from "../components/ScrollDown";

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
            <p className="project-description">{project.description}</p>
            <div className="technology-stack">
            <p className="before-list">{project.before_list}</p>
            <ul>
            {project.description_list.map((term, index) => (
                  <li  key={index}>
                  {term}
                </li>
              ))}
            </ul>
            </div>
            <div className="technology-stack">
            <p className="before-list">Tools I used:</p>
              <ul>
              {project.technologies.map((tool, index) => (
                <li className="tech" key={index}>
                  {tool}
                </li>
              ))}
              </ul>
            </div>
            <div className="project-links">
              <a href={project.github} target="_blank">GitHub 
                <GitHubIcon className="icon"/>
              </a>
              <a href={project.demo} target="_blank">Live Site 
                <ExLinkIC className="icon" />
              </a>
            </div>
          </article>
          
        ))}
      </div>
    </section>
  )
}
export default Works