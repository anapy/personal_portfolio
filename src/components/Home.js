import React from 'react';
import '../stylesheets/home.scss';

class Home extends React.Component {
  render() {
    return (
    <div className="home">
      {/* <div className="img_home_container"><img src="./images/foto.jpeg" alt="foto" height="300px"></img></div> */}
      <p className="home_text">
        Graduada en Traducción e Interpretación con gran pasión por los
        idiomas que ha decidido cambiar los lenguajes humanos por los
        lenguajes de <span className="highlightWords">programación</span>. Mi experiencia laboral me ha llevado a
        entornos en los que la capacidad <span className="highlightWords">resolutiva</span> y la adaptabilidad a
        diferentes culturas e <span className="highlightWords"> idiomas</span> era algo esencial. Me apasiona tener
        siempre algo nuevo que <span className="highlightWords">aprender</span> y fijarme metas que cumplir, por eso
        me decidí a formarme como Desarrolladora <span className="highlightWords">Front-End</span>.
      </p>
    </div>
    );
  }
}

export default Home;
