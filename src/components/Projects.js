import React from 'react';
import Project from './Project';
import '../stylesheets/Work.scss';

const Projects = props => {
  const projects = props.projects.map((project, index) => {
    return (
    <li className={`project ${project.id}`} key={index}>
      <Project
        name={project.name}
        tecnologies={project.tecnologies}
        description={project.description}
        image={project.image}
        webURL={project.webURL}
        githubURL={project.githubURL}
      />
    </li>
    )
  });
  return (
    <div className="work">
      <h2 className="projects_title">Proyectos</h2>
      <ul className="project_container">
        {projects}
      </ul>
    </div>
  );

}

export default Projects;

