import React from 'react';
import Work from './Work';
import '../stylesheets/App.css';

class App extends React.Component {
  render() {
    return (
      <div>
      <header>
        <h1>Ana Belén Funes</h1>
      </header>
        <main>
          <Work/>
        </main>
      </div>
    )
  }
}

export default App;
