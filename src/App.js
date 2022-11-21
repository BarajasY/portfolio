import React from 'react';
import { Introduction, Navbar, Projects, Contact, Stack } from './Components/index';

function App() {

  return (
    <div className="App">
      <Navbar />
      <Introduction />
      <Stack />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;
