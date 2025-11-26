import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./layouts/navBar/NavBar";
import FooterBar from "./layouts/footerBar/FooterBar";
import Home from "./pages/Home";
import SobreMi from "./pages/AboutMe";
import Proximamente from "./layouts/Proximamente/Proximamente";
import NotFound from "./layouts/NotFound/NotFound";
import SesionReiki from "./pages/SesionReiki";
import Activaciones from "./pages/Activaciones";
import SesionRegistros from "./pages/SesionRegistros";
import CheckAgenda from "./layouts/CheckAgenda/CheckAgenda";
import SesionAcompañamiento from "./pages/SesionAcompañamiento";

function App() {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sobre-mi" element={<SobreMi />} />
        <Route path="/sesiones/reiki" element={<SesionReiki />} />
        <Route
          path="/sesiones/registros-akashicos"
          element={<SesionRegistros />}
        />
        <Route
          path="/sesiones/acompañamiento"
          element={<SesionAcompañamiento />}
        />
        <Route path="/Armonizaciones/activaciones" element={<Activaciones />} />
        <Route path="/Armonizaciones/ebooks" element={<Proximamente />} />
        <Route path="/checkagenda" element={<CheckAgenda />} />
        <Route path="*" element={<NotFound />} />
        {/*<Route path="/Cursos" element={<Curso />} /> */}
      </Routes>
      <FooterBar />
    </Router>
  );
}

export default App;
