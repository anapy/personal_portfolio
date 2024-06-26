import React from 'react';
import '../stylesheets/aboutMe.scss';

const AboutMe = () => {

  return (
  <div className="aboutMe">
    <h2 className="aboutMe_title">Sobre mí</h2>
    <div className="aboutMe_info">
      <div className="img_home_container"><img src="./images/AB_photo.jpeg" alt="foto" height="300px"></img></div>
      <div className="article_container">
      <article className="studies">
        <h3 className="article_title">Experiencia Laboral</h3>
        <p>2022-2024 - Galp Solar <b>Desarrolladora Frontend</b></p>
        <p>2020-2022 - Kenjo <b>Desarolladora Fullstack</b></p>
      </article>
      <article className="studies">
        <h3 className="article_title">Formación Académica</h3>
        <p>2020 - Curso en Adalab de <b>Programación Front-End</b></p>
        <p>2019 - Inicio grado en <b>Ingeniería Informática</b></p>
        <p>2016 - Master en <b>Comercio Internacional</b></p>
        <p>2015 - Graduada en <b>Traducción e Interpretación</b></p>
      </article>
      <article className="tecnologies">
        <h3 className="article_title">Conocimientos en tecnologías</h3>
        <p>Durante los últimos años profesionales he estado programando con Angular y Nodejs durante mi etapa en Kenjo como programadora Fullstack y como progradora Frontend en Galp Solar.
          He trabajado con la base de datos MongoDB y he hecho testing con Jest y Cypress.</p>
        <p>En el bootcamp de Adalad desarrollé proyectos usando tecnologías como
          HTML, CSS, SASS, Javascript y React. También he usado Git para el control de versiones y la filosofía agile como marco de trabajo. </p>
        <p>Durante la carrera de ingenería aprendí los fundamentos de la programación usando el lenguaje C. Posteriormente, he aprendido Java y las bases de la Programación Orientada a Objetos.</p>
        <p>Por mi cuenta, he aprendido Python, con el curso de <i>Python for everybody</i> y actualmente estoy aprendiendo a crear una API Rest y el lenguaje de consulta de base de datos SQL.</p>
      </article>
      <article className="hobbies">
        <h3 className="article_title">Idiomas</h3>
        <p>Inglés - C1</p>
        <p>Alemán - B2</p>
      </article>
      </div>
    </div>
    </div>
  );

}

export default AboutMe;
