/* eslint-disable react/jsx-no-target-blank */
import { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { altText } from "../utils/altText";

const Project = ({ projectName, featured }) => {
  const [projectData, setProjectData] = useState(null);
  const youtubeDemos = [
    {
      name: "Brew Buddies v2",
      link: "https://youtu.be/2a89CTdvhDI",
    },
    {
      name: "Hey Boo Boo",
      link: "https://youtu.be/Hr_MiHfB8rQ",
    },
    {
      name: "State Park Excursion",
      link: "https://youtu.be/KO30hAY_lMc",
    },
  ];

  const formatDate = (isoDateString) => {
    const date = new Date(isoDateString);
    const options = { month: "short", day: "numeric", year: "numeric" };
    return new Intl.DateTimeFormat("default", options).format(date);
  };

  // fetch project repositories
  useEffect(() => {
    const fetchRepo = async () => {
      try {
        const owner = "miacias";
        const response = await fetch(
          `https://api.github.com/repos/${owner}/${projectName}`
        );
        const data = await response.json();
        setProjectData({
          id: data.id,
          code: data.html_url,
          description: data.description,
          deployed: data.homepage,
          topics: data.topics,
          createdDate: formatDate(data.created_at),
          updatedDate: formatDate(data.updated_at),
        });
      } catch (err) {
        console.error("Error fetching project data:", err);
      }
    };
    fetchRepo();
  }, [projectName]);

  if (!projectData) {
    return <div>Loading Project...</div>;
  }

  if (featured) {
    const formattedName = projectName.split("-").join(" ");
    const demoVideo = youtubeDemos.find((demo) => demo.name.toLowerCase() === formattedName.toLowerCase());

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
              >
                Deployed
              </a>
            )}

            {demoVideo && (
              <a
                href={demoVideo.link}
                className="project-link"
                target="_blank"
              >
                Demo
              </a>
            )}

            <a
              href={projectData.code}
              className={`project-code ${!projectData.code ? "inactive" : ""}`}
              target="_blank"
            >
              GitHub
            </a>
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
  } else {
    const formattedName = projectName.split("-").join(" ");
    const demoVideo = youtubeDemos.find((demo) => demo.name.toLowerCase() === formattedName.toLowerCase());

    return (
      <div className="project-card">
        <div className="project-header">
          <h3 className="section-header project-name">
            {formattedName}
          </h3>

          <div className="links-container">
            {projectData.deployed && (
              <a
                href={projectData.deployed}
                className={`project-link`}
                target="_blank"
              >
                Deployed
              </a>
            )}

            {demoVideo && (
              <a
                href={demoVideo.link}
                className="project-link"
                target="_blank"
              >
                Demo
              </a>
            )}

            <a
              href={projectData.code}
              className={`project-code ${!projectData.code ? "inactive" : ""}`}
              target="_blank"
            >
              GitHub
            </a>
          </div>
        </div>

        <div className="project-info">
          <img
            className="project-img"
            src={`./assets/images/${projectName}.png`}
            alt=""
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
  }
};

Project.propTypes = {
  projectName: PropTypes.string.isRequired,
  featured: PropTypes.bool,
};

export default Project;
