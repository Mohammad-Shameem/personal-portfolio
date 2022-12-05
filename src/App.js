import { useState } from "react";
import { Toaster } from "react-hot-toast";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";
import Header, { HeaderPhone } from "./Components/Header";
import Home from "./Components/Home";
import Projects from "./Components/Projects";
import Services from "./Components/Services";
import Testimonial from "./Components/Testimonial";
import Timeline from "./Components/Timeline";

import "./styles/app.scss";
function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <div
      style={{
        overflowX: "hidden",
      }}
    >
      <HeaderPhone menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <Header menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <Home />
      <Projects />
      <Timeline />
      <Services />
      <Testimonial />
      <Contact />
      <Footer />
      <Toaster />
    </div>
  );
}

export default App;
