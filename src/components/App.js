import React from 'react';
import Projects from './Projects';
import Home from './Home';
import AboutMe from './AboutMe';
import projects from '../data/projects.json';



import '../stylesheets/App.scss';
import { Link, Route, Switch } from 'react-router-dom';

const App = () => {
  return (
    <div>
    <header className="header">
      <Link to="/"><h1 className="mainTitle">Ana Belén Funes</h1></Link>
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
          <Route path="/projects">
            <Projects projects={projects}/>
            </Route>
          <Route path="/aboutme" component={AboutMe} />
        </Switch>
      </main>
    </div>
  )
}

export default App;
