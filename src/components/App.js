import React, { useState } from 'react';
import Projects from './Projects';
import Home from './Home';
import AboutMe from './AboutMe';
import Contact from './Contact';
import Footer from './Footer';
import Landing from './Landing';
import projects from '../data/projects.json';
import '../stylesheets/App.scss';
import { Link, Route, Switch } from 'react-router-dom';

const App = () => {
  const [hamburger, setHamburger] = useState(false);

  const hamburgerHandler = ev => {
    setHamburger(ev.target.checked);
  }
  const navHandler = () => {
    setHamburger(false);
  }

  return (
    <div>
    <header className="header">
      <Link to="/"><img src="./images/logoAB.png" alt="logoAB" height="150px" className="AB_logo"></img></Link>
      <nav className="navigation">
      <div className="menuToggle">
      <input type="checkbox" checked={hamburger} onChange={hamburgerHandler}/>
        <span></span>
        <span></span>
        <span></span>
        <ul className="menu navigation_menu" onClick={navHandler}>
          <li><Link className="nav_link" to="/projects" >Proyectos </Link></li>
          <li><Link className="nav_link center" to="/aboutme" >Sobre mí </Link></li>
          <li><Link className="nav_link" to="/contact" >Contacto</Link></li>
        </ul>
        </div>
      </nav>
    </header>
      <main>
      <Switch>
          <Route exact path="/" component={Landing} />
          <Route path="/projects">
            <Projects projects={projects}/>
          </Route>
          <Route path="/aboutme" component={AboutMe} />
          <Route path="/contact" component={Contact} />
          <Route path="/home" component={Home} />
        </Switch>
      </main>
      <Footer/>
    </div>
  )
}

export default App;
