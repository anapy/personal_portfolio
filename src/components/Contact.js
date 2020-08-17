import React, { useState } from 'react';
import '../stylesheets/contact.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
library.add(fab)

const Contact = props => {
  const [hide, setHide] = useState('');
  const clickHandler = ev =>{
    ev.preventDefault();
    hide !== '' ? setHide('') : setHide('open');
  }
  return <div className="App">
  <nav className="circular-menu">
    <div className={`circle ${hide !== '' ? 'open' : ''}`}>
        <a href="https://www.linkedin.com/in/anabelenfunes/" className="menu-item linkedin" value="1"> <FontAwesomeIcon icon={['fab', 'linkedin']}/></a>
        <a href="https://github.com/anapy" className="menu-item github"> <FontAwesomeIcon icon={['fab', 'github']}/> </a>
        <a href="https://twitter.com/anajapy" className="menu-item twitter"> <FontAwesomeIcon icon={['fab', 'twitter']}/></a>
    </div>
    <button className="menu-button" onClick={clickHandler}></button>
  </nav>
  </div>;
}

export default Contact;
