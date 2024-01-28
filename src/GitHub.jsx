import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

const Project = ({ projectName, featured }) => {
  const [projectData, setProjectData] = useState(null);

  const formatDate = (isoDateString) => {
    const date = new Date(isoDateString);
    const options = { month: "short", day: "numeric", year: "numeric" };
    return new Intl.DateTimeFormat("default", options).format(date);
  };

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
        console.error('Error fetching project data:', err);
      }
    };
    fetchRepo();
  }, [projectName]);

  if (!projectData) {
    return <div>Loading Project...</div>;
  }

  if (featured) {
    return (
      <div className='project-card'>
        <div className='project-header'>
          <h3 className='section-header project-name'>{projectName.split('-').join(' ')}</h3>
          <div className='links-container'>
            <a 
              href={projectData.deployed ? projectData.deployed : '#'} 
              className={`project-link ${!projectData.deployed ? 'inactive' : ''}`}
            >{projectData.deployed ? 'Deployed' : ''}</a>
            <a 
              href={projectData.code}
              className={`project-code ${!projectData.code ? 'inactive' : ''}`}
            >GitHub</a>
          </div>
        </div>
        <div className='project-info'>
          <img className='project-img' src='./assets/images/hey-boo-boo.png'/>
          <div className='project-text'>
            <p>{projectData.description}</p>
            <ul>
              {projectData.topics.map((topic, index) => {
              return (<li className='topic' key={index}>{topic}</li>)
              })}
            </ul>
            <p>Created {projectData.createdDate}</p>
            <p>Last updated {projectData.updatedDate}</p>
          </div>
        </div>
      </div>
    );
  } else {
    return (<div>Cool project bro but not featured</div>);
  }
}

Project.propTypes = {
  projectName: PropTypes.string.isRequired,
  featured: PropTypes.bool,
}

export default Project;
