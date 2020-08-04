import React from 'react';
import '../stylesheets/Work.scss';

class Work  extends React.Component {
  render() {
    return (
      <div className="work">
        <ul className="project_container">
          <li className="project project1">
            <div className="project_info">
              <h2 className="project_info_title">Queens of Code</h2>
              <p>Proyecto realizado usando HTML, CSS y SASS</p>
            </div>
            <div className="img_container">
              <img className="image" src="./images/project-module-1.png" alt="project-module-1" width="400px"></img>
            </div>
          </li>
          <li className="project exam">
            <div className="img_container">
              <img className="image" src="./images/modulo-1-final.png" alt="pokedex" width="400px"></img>
            </div>
          </li>
          <li className="project project2">
            <div className="img_container">
              <img className="image" src="./images/project-module-2.jpg" alt="project-module-2" width="400px"></img>
            </div>
          </li>
          <li className="project exam">
            <div className="img_container">
              <img className="image" src="./images/modulo-2-intermedia.png" alt="pokedex" width="400px"></img>
            </div>
          </li>
          <li className="project exam">
            <div className="img_container">
              <img className="image" src="./images/modulo-2-final.png" alt="pokedex" width="400px"></img>
            </div>
          </li>
          <li className="project exam">
            <div className="img_container">
              <img className="image" src="./images/pokedex.png" alt="pokedex" width="400px"></img>
            </div>
          </li>
        </ul>
      </div>
    );
  }
}

export default Work;

