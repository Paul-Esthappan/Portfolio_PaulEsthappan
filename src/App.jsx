//import "./App.css";
import Contact from './components/Contact';
import Projects from './components/Projects';
import Resuma from './components/Resuma';
import Topnav from './components/Topnav'
import Work from './components/Work';
import Main from "./components/Main";

function App() {
  return (
    <div>
      <Topnav />
      <Main />
      <Work />
      <Projects />
      <Resuma/>
      <Contact/>
    </div>
  );
}

export default App;
