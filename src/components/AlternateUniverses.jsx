import { altText } from "../utils/altText";

export const AlternateUniverses = () => {
  const projectName = "alternate-universes";
  const formattedName = "Alternate Universes LLC";
  const projectData = {
    deployed: "https://alternateu.com/",
    code: "",
    description: "Alternate Universes LLC is a headless WordPress application that leverages React, Next.js, Apollo GraphQL, Faust.js, Mantine UI, and PHP on the WP Engine platform to deliver a seamless user experience.",
    topics: [
      "React",
      "Next.js",
      "GraphQL",
      "Faust.js",
      "Mantine UI",
      "WordPress",
      "PHP",
    ],
    createdDate: "March 25, 2024",
    updatedDate: "October 1st, 2025",
  }

  return (
    <div className="featured-card">
        <div className="project-header">
          <h3 className="section-header project-name">{formattedName}</h3>

          <div className="links-container">
            {projectData.deployed && (
              <a
                href={projectData.deployed}
                className={`project-link`}
                target="_blank"
                rel="noreferrer"
              >
                Deployed
              </a>
            )}

            {/* {demoVideo && (
              <a
                href={demoVideo.link}
                className="project-link"
                target="_blank"
                rel="noreferrer"
              >
                Demo
              </a>
            )} */}

            {/* <a
              href={projectData.code}
              className={`project-code ${!projectData.code ? "inactive" : ""}`}
              target="_blank"
              rel="noreferrer"
            >
              GitHub
            </a> */}
          </div>
        </div>

        <div className="project-info">
          <img
            className="project-img"
            src={`./assets/images/${projectName}.png`}
            alt={altText(projectName)}
          />

          <div className="project-text">
            <p className="description">{projectData.description}</p>

            <ul className="topics-container">
              {projectData.topics.map((topic, index) => {
                return (
                  <li className="topic" key={index}>
                    {topic}
                  </li>
                );
              })}
            </ul>

            <div className="dates">
              <p>Created: {projectData.createdDate}</p>
              <p>Last updated: {projectData.updatedDate}</p>
            </div>
          </div>
        </div>
      </div>
  );
};
