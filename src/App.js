import Navbar from "./components/Navbar";
import Home from "./components/Home";
import "./App.css";
import About from "./components/About";
import Resume from "./components/Resume";
import ProjectWork from "./components/Project";
import Blog from "./components/Blog";
import Contact from "./components/Contact";
import { BrowserRouter as Routex, Switch, Route } from "react-router-dom";
import Footer from "./components/Footer";
import Achievements from "./components/Achievements";
import Education from "./components/Education";
import Internship from "./components/Internship";
import Skills from "./components/Skills";

function App() {
  return (
    <Routex>
      <div className="App">
        <Navbar />
        <Home />
        <About />
        <Resume />
        <ProjectWork />
        <Blog />
        <Contact />
        <Footer />
      </div>

      <Switch>
        <Route path="/about" component={About} />
        <Route path="/home" component={Home} />
        <Route path="/resume" component={Resume} />
        <Route path="/projects" component={ProjectWork} />
        <Route path="/blogs" component={Blog} />
        <Route path="/contact" component={Contact} />
        <Route path="/achievement" component={Achievements} />
        <Route path="/education" component={Education} />
        <Route path="/internship" component={Internship} />
        <Route path="/skills" component={Skills} />
      </Switch>
    </Routex>
  );
}

export default App;
