import React from 'react';
// import '../stylesheets/.scss';

const Project = props => {
  const {name, tecnologies, description, image} = props;
  const tecnologiesList = tecnologies.map((tecnology, index) => {
    return <li className="type" key={index}>{tecnology}</li>
  } );
  return (
    <div className="work">
      <ul className="project_container">
        <li className="project project1">
          <div className="project_links">
            <span className="web">www</span>
            <span className="github">cat</span>
          </div>
          <div className="img_container">
            <img className="image" src={image} alt="project-module-1" width="400px"></img>
          </div>
          <div className="project_info">
            <h2 className="project_info_title">{name}</h2>
            <p className="project_info_description">{description}</p>
            <ul className="project_info_tecnologies">
              {tecnologiesList}
            </ul>
          </div>
        </li>
      </ul>
    </div>
  );

}

export default Project;