import React from 'react';
import Project from './Project';
import '../stylesheets/Work.scss';

const Projects = props => {
  const projects = props.projects.map((project) => {
    return (
    <li className={`project ${project.id}`}>
      <Project
        name={project.name}
        tecnologies={project.tecnologies}
        description={project.description}
        image={project.image}
      />
    </li>
    )
  });
  return (
    <div className="work">
      <ul className="project_container">
        {projects}
      </ul>
    </div>
  );

}

export default Projects;

