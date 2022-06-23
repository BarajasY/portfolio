import { Introduction, Navbar, About, Projects, Contact } from './Components/index';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Introduction />
      <About />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;
