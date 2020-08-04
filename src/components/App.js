import React from 'react';
import Work from './Work';
import Home from './Home';
import AboutMe from './AboutMe';


import '../stylesheets/App.scss';
import { Link, Route, Switch } from 'react-router-dom';

class App extends React.Component {
  render() {
    return (
      <div>
      <header>
        <h1><Link to="/">Ana Belén Funes</Link></h1>
        <nav>
          <ul className="navigation_menu">
            <li><Link className="nav_link" to="/projects">Proyectos </Link></li>
            <li><Link className="nav_link center" to="/aboutme">Sobre mí </Link></li>
            <li><Link className="nav_link" to="/contact">Contacto</Link></li>
          </ul>
        </nav>
      </header>
        <main>
        <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/projects" component={Work} />
            <Route path="/aboutme" component={AboutMe} />

          </Switch>
          <Work/>
        </main>
      </div>
    )
  }
}

export default App;
