import React from 'react';
import '../stylesheets/aboutMe.scss';

const AboutMe = () => {

  return (
  <div className="aboutMe">
    <h2 className="aboutMe_title">Sobre mí</h2>
    <div className="aboutMe_info">
      <div className="img_home_container"><img src="./images/AB_black.jpg" alt="foto" height="300px"></img></div>
      <div className="article_container">
      <article className="studies">
        <h3>Formación Académica</h3>
        <p>2020 - Curso en Adalab de <b>Programación Front-End</b></p>
        <p>2019 - Inicio grado en <b>Ingeniería Informática</b></p>
        <p>2016 - Master en <b>Comercio Internacional</b></p>
        <p> 2015 - Graduada en <b>Traducción e Interpretación</b></p>
      </article>
      <article className="tecnologies">
        <h3>Conocimientos en tecnologías</h3>
        <p>En el curso de programación Front-End he desarrollado proyectos usando tecnologías como
          HTML, CSS, SASS, Javascript y React. También he usado Git para el control de versiones y la filosofía agile como marco de trabajo. </p>
        <p>Durante la carrera de ingenería aprendí los fundamentos de la programación usando el lenguaje C. Posteriormente, he aprendido Java y las bases de la Programación Orientada a Objetos.</p>
        <p>Por mi cuenta, he aprendido Python, con el curso de <i>Python for everybody</i> y actualmente estoy aprendiendo a crear una API Rest y el lenguaje de consulta de base de datos SQL.</p>
      </article>
      <article className="hobbies">
        <h3>Idiomas</h3>
        <p>Inglés - C1</p>
        <p>Alemán - B2</p>
      </article>
      </div>
    </div>
    </div>
  );

}

export default AboutMe;
