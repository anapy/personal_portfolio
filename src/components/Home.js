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
        lenguajes de programación. Mi experiencia laboral me ha llevado a
        entornos en los que la capacidad resolutiva y la adaptabilidad a
        diferentes culturas e idiomas era algo esencial. Me apasiona tener
        siempre algo nuevo que aprender y fijarme metas que cumplir, por eso
        me decidí a formarme como Desarrolladora Front-End.
      </p>
    </div>
    );
  }
}

export default Home;
