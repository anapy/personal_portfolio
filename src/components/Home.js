import React from 'react';
import '../stylesheets/home.scss';

class Home extends React.Component {
  render() {
    return (
    <div className="home">
      <p className="home_text">
        <span className="nonhighlight">Me gradué en Traducción e Interpretación pero descubrí el</span>
        <span className="highlightWords two"> mundo tecnológico </span>
        <span className="nonhighlight">y tomé la decisión de cambiar de rumbo profesional e inicié mis estudios en</span>
        <span className="highlightWords one"> Ingeniería Informática</span>
        <span className="nonhighlight">. Me apasiona tener siempre algo nuevo que aprender y fijarme</span>
        <span className="highlightWords four"> metas</span>
        <span className="nonhighlight"> que alcanzar. Me inicié en el mundo de la programación con cursos en</span>
        <span className="highlightWords six"> Python</span>
        <span className="nonhighlight">, también he hecho desarrollos en</span>
        <span className="highlightWords seven"> Java </span>
        <span className="nonhighlight">y</span>
        <span className="highlightWords three"> React</span>
        <span className="nonhighlight">. Finalmente encontré mi sitio con</span>
        <span className="highlightWords five"> Angular </span>
        <span className="nonhighlight">y</span>
        <span className="highlightWords nine"> Node</span>
        <span className="nonhighlight">, lenguajes en los que he estado desarrollando diferentes proyectos. Además también tengo proyectos propios en desarrollo tanto en React como</span>
        <span className="highlightWords eight"> React Native</span>
        <span className="nonhighlight">.</span>
      </p>
    </div>
    );
  }
}

export default Home;
