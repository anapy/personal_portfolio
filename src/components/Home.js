import React from 'react';
import '../stylesheets/home.scss';

class Home extends React.Component {
  render() {
    return (
    <div className="home">
      {/* <div className="img_home_container"><img src="./images/foto.jpeg" alt="foto" height="300px"></img></div> */}
      <p className="home_text">
        <span class="nonhighlight">Graduada en Traducción e Interpretación con gran pasión por los</span>
        <span className="highlightWords two"> idiomas </span>
        <span class="nonhighlight">que ha decidido cambiar los lenguajes humanos por los lenguajes de</span>
        <span className="highlightWords one"> programación</span>
        <span class="nonhighlight">. Mi experiencia laboral me ha llevado a entornos en los que la capacidad</span>
        <span className="highlightWords four"> resolutiva</span>
        <span class="nonhighlight"> y la adaptabilidad a diferentes culturas e idiomas era algo esencial. Soy curiosa y</span>
        <span className="highlightWords six"> exigente </span>
        <span class="nonhighlight">con mi trabajo. Cuando descubrí el mundo tecnológico decidí cambiar de rumbo profesional e inicié mis estudios en </span>
        <span className="highlightWords seven"> Ingeniería Informática</span>
        <span class="nonhighlight">. Me apasiona tener siempre algo nuevo que</span>
        <span className="highlightWords three"> aprender </span>
        <span class="nonhighlight">y fijarme metas que alcanzar, por eso decidí formarme como desarrolladora</span>
        <span className="highlightWords five"> Front-End </span>
        <span class="nonhighlight"> y así sumarlo a mis conocimientos de</span>
        <span className="highlightWords nine"> Java </span>
        <span class="nonhighlight">y</span>
        <span className="highlightWords eight"> Python</span>
        <span class="nonhighlight">, aunque eso será solo el principio.</span>
      </p>
    </div>
    );
  }
}

export default Home;
