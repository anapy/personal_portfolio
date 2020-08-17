import React, { useState } from 'react';
import '../stylesheets/footer.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { fas } from '@fortawesome/free-solid-svg-icons'

library.add(fab, fas)

const Contact = props => {
  const [hide, setHide] = useState('');
  const clickHandler = ev =>{
    ev.preventDefault();
    hide !== '' ? setHide('') : setHide('open');
  }
  return <footer className="footer">
  <nav className="circular-menu">
    <div className={`circle ${hide !== '' ? 'open' : ''}`}>
        <a href="https://www.linkedin.com/in/anabelenfunes/" className="menu-item linkedin" value="1"> <FontAwesomeIcon icon={['fab', 'linkedin']}/></a>
        <a href="https://github.com/anapy" className="menu-item github"> <FontAwesomeIcon icon={['fab', 'github']}/> </a>
        <a href="https://twitter.com/anajapy" className="menu-item twitter"> <FontAwesomeIcon icon={['fab', 'twitter']}/></a>
    </div>
    <button className="menu-button" onClick={clickHandler}><FontAwesomeIcon className="share_logo" icon={['fas', 'share-alt']}/></button>
  </nav>
  </footer>;
}

export default Contact;
