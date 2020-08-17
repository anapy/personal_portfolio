import React from 'react';
// import '../stylesheets/.scss';

const Project = props => {
  const {name, tecnologies, description, image, webURL, githubURL} = props;
  const tecnologiesList = tecnologies.map((tecnology, index) => {
    return <li className="tecnologies" key={index}><img src={tecnology.url} alt={tecnology.name} height="30px"></img></li>
  } );
  console.log(props);
  return (
    <div className="work">
      <ul className="project_container">
        <li className="project project1">
          <div className="project_links">
            <a href={webURL} className="web" target="_blank" rel="noopener noreferrer"><img src="./images/logos/web2.svg" alt="web" height="40px"></img></a>
            <a href={githubURL} className="github_logo" target="_blank" rel="noopener noreferrer"><img src="./images/logos/github.svg" alt="web" height="40px"></img></a>
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