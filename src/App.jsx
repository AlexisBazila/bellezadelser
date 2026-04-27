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
import ScrollToTop from "./components/ScrollToTop";

function App() {
  return (
    <Router>
      <ScrollToTop />
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

        <Route path="/belleza-holistica/belleza" element={<SesionBelleza />} />
        <Route
          path="/otras-sanaciones/activacion"
          element={<SesionAbundancia />}
        />
        <Route path="/otras-sanaciones/bloqueos" element={<SesionBloqueos />} />
        <Route
          path="/otras-sanaciones/sanacion-de-utero"
          element={<SesionUtero />}
        />
        <Route
          path="/otras-sanaciones/sanacion-estres"
          element={<SesionEstres />}
        />
        <Route path="/otras-sanaciones/chakras" element={<SesionChakras />} />
        <Route
          path="/otras-sanaciones/limpieza-de-espacios"
          element={<SesionLimpiezaEspacios />}
        />
        <Route
          path="/otras-sanaciones/reiki-para-mascotas"
          element={<SesionReikiMascotas />}
        />
        <Route
          path="/otras-sanaciones/reiki-oncologico"
          element={<SesionReikiOncologico />}
        />
        <Route path="/Armonizaciones/activaciones" element={<Proximamente />} />
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
