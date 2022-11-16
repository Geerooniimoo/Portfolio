import "./app.scss"
import Work from "./components/work/Work";
import Skills from './components/skills/Skills';
import About from "./components/about/About";
import Contact from "./components/contact/Contact";
import { topIcons,bottomIcons } from "./components/skills/icons";

function App() {
  return (
    <div className="app">

      <About/>
      <Skills topColor="#2b7fb7" icons={topIcons} banner = 'Applications' bottomColor='#c98d1f'/>
      <Work/>
      <Skills topColor="rgb(201, 141, 31)" icons={bottomIcons} banner = 'Contact' bottomColor='#3e6dc9'/>
      <Contact/>
    </div>
  );
}

export default App;
