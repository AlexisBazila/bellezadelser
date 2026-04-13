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
import SesionsPack from "./pages/SesionsPack";
import SesionAbundancia from "./pages/SesionAbundancia";
import SesionBelleza from "./pages/SesionBelleza";
import SesionBloqueos from "./pages/SesionBloqueos";
import SesionUtero from "./pages/SesionUtero";
import SesionEstres from "./pages/SesionEstres";
import SesionChakras from "./pages/SesionChakras";
import SesionLimpiezaEspacios from "./pages/SesionLimpiezaEspacios";
import SesionReikiMascotas from "./pages/SesionReikiMascotas";
import SesionReikiOncologico from "./pages/SesionReikiOncologico";

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
        <Route path="/sesiones/abundancia" element={<SesionAbundancia />} />
        <Route path="/sesiones/belleza" element={<SesionBelleza />} />
        <Route path="/sesiones/bloqueos" element={<SesionBloqueos />} />
        <Route path="/sesiones/sanacion-de-utero" element={<SesionUtero />} />
        <Route path="/sesiones/sanacion-estres" element={<SesionEstres />} />
        <Route path="/sesiones/chakras" element={<SesionChakras />} />
        <Route
          path="/sesiones/limpieza-de-espacios"
          element={<SesionLimpiezaEspacios />}
        />
        <Route
          path="/sesiones/reiki-para-mascotas"
          element={<SesionReikiMascotas />}
        />
        <Route
          path="/sesiones/reiki-oncologico"
          element={<SesionReikiOncologico />}
        />
        <Route path="/Armonizaciones/activaciones" element={<Activaciones />} />
        <Route path="/carrito" element={<Proximamente />} />
        <Route path="/Armonizaciones/ebooks" element={<Proximamente />} />
        <Route path="/checkagenda" element={<CheckAgenda />} />
        <Route path="/packs" element={<SesionsPack />} />
        <Route path="*" element={<NotFound />} />
        {/*<Route path="/Cursos" element={<Curso />} /> */}
      </Routes>
      <FooterBar />
    </Router>
  );
}

export default App;
