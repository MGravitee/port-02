import {stack} from "../section-data/stack";



function Stack() {
    const { title, myTools } = stack;
  
    return (
        <section className="stack" id="stack">
        <h1>{title}</h1>
        <div className="stack-container-grid">
          {myTools.map((tool, index) => (
            <article className="stack-card" key={index}>
              <h3 className="stack-title">{tool.title}</h3>
              <div className="stack-stack">
                {tool.tools.map((tool, index) => (
                  <span className={`${tool}`} key={index}>
                    {tool}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>
    );
  };

export default Stack