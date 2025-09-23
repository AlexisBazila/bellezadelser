import { useState } from "react";
import "./App.css";
import HeroSection from "./layouts/heroSection/HeroSection";
import NavBar from "./layouts/navBar/NavBar";
import Home from "./pages/Home";
import FooterBar from "./layouts/footerBar/FooterBar";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <NavBar />
      <Home />
      <FooterBar />
    </>
  );
}

export default App;
