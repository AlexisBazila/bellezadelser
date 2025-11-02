import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./layouts/navBar/NavBar";
import FooterBar from "./layouts/footerBar/FooterBar";
import Home from "./pages/Home";
import SobreMi from "./pages/AboutMe";
import Armonizaciones from "./pages/Armonizaciones";
import Curso from "./pages/Curso";
import { MdHeight } from "react-icons/md";

function App() {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/sobre-mi" element={<SobreMi />} />
        <Route path="/Armonizaciones" element={<Armonizaciones />} />
        <Route path="/Cursos" element={<Curso />} /> */}
      </Routes>
      <FooterBar />
    </Router>
  );
}

export default App;
