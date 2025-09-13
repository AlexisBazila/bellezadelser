import { useState } from "react";
import "./App.css";
import HeroSection from "./layouts/heroSection/HeroSection";
import NavBar from "./layouts/navBar/NavBar";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <NavBar />
      <HeroSection />
    </>
  );
}

export default App;
