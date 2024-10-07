import { stack } from "../section-data/stack";
import switchColour from "../toolbelt/headingColours";

function Stack() {
    const { title, myTools } = stack;

    return (
        <div className="stack">
            <h2 className="stack-heading">{title}</h2>
            <div className="stack-container-grid">
                {myTools.map((tool, index) => (
                    <article className="stack-card" key={index}>
                        <h3
                            className={`${switchColour(
                                tool.title
                            )} stack-title`}
                        >
                            {tool.title}
                        </h3>
                        <div className="stack-stack">
                            <ul>
                                {tool.tools.map((tool, index) => (
                                    <li key={index}>{tool}</li>
                                ))}
                            </ul>
                        </div>
                    </article>
                ))}
            </div>
        </div>
    );
}

export default Stack;
