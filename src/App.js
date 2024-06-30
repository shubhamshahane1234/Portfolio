import logo from "./logo.svg";
import "./App.css";
import Home from "./components/Home";
import Projects from "./components/Projects";
import Nav from "./components/Nav";
import About from "./components/About";
import Myskills from "./components/Myskills";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Nav />
      <Home />
      <Myskills />
      <Projects />
      <About />
      <Footer />
    </div>
  );
}

export default App;
