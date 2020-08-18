import React from 'react';
import '../stylesheets/landing.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom';


library.add(fas)

const Landing = () => {
  const openKey = "{";
  const closeKey = "}";
  return (<div>
  <div className="code_container">
    <p><b>public class <span className="main_words">Welcome</span></b> {openKey}</p>
    <p className="indent2"><b>public static void <span className="main_words">main</span></b>(String[] args) {openKey}</p>
    <p className="indent4">System.out.println(<span className="main_words">"Pulsa el botón ejecutar"</span>);</p>
    <p className="indent2">{closeKey}</p>
    <p>{closeKey}</p>
  </div>
    <div className="run_button">
      <Link to="/home" >
        <FontAwesomeIcon icon={['fas', 'play']} className="run_icon"/><span className="button_word">Ejecutar</span>
      </Link>
    </div>
  </div>
  );
}

export default Landing;