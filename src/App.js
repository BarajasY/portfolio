import React from 'react';
import { Introduction, Navbar, About, Projects, Contact, Stack } from './Components/index';

function App() {

  return (
    <div className="App">
      <Navbar />
      <Introduction />
      <About />
      <div className="vl"></div>
      <Stack />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;
