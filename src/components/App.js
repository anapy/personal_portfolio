import React from 'react';
import Work from './Work';
import '../stylesheets/App.scss';

class App extends React.Component {
  render() {
    return (
      <div>
      <header>
        <h1>Ana Belén Funes</h1>
        <nav>
          <ul className="navigation_menu">
            <li><a className="nav_link" href="/">Proyectos</a></li>
            <li><a className="nav_link" href="/">Sobre mí</a></li>
            <li><a className="nav_link" href="/">Contacto</a></li>
          </ul>
        </nav>
      </header>
        <main>
          <Work/>
        </main>
      </div>
    )
  }
}

export default App;
