import React from 'react';
import '../stylesheets/aboutMe.scss';

class AboutMe extends React.Component {
  render() {
    return (
    <div className="aboutMe">
      <h2 className="aboutMe_title">Sobre mí</h2>
      <div className="article_container">
      <article className="studies">
        <h3>Formación</h3>
        <p>En 2015 me gradué en el grado de <b>Traducción e Interpretación</b></p>
      </article>
      <article className="experience">
        <h3>Experiencia</h3>
        <p>En 2015 me gradué en el grado de <b>Traducción e Interpretación</b></p>
      </article>
      <article className="hobbies">
        <h3>Hobbies</h3>
        <p>En 2015 me gradué en el grado de <b>Traducción e Interpretación</b></p>
      </article>
      </div>
    </div>
    );
  }
}

export default AboutMe;
