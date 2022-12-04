import { Toaster } from "react-hot-toast";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import Home from "./Components/Home";
import Projects from "./Components/Projects";
import Services from "./Components/Services";
import Testimonial from "./Components/Testimonial";
import Timeline from "./Components/Timeline";

import "./styles/app.scss";
function App() {
  return (
    <>
      <Header />
      <Home />
      <Projects />
      <Timeline />
      <Services />
      <Testimonial />
      <Contact />
      <Footer />
      <Toaster />
    </>
  );
}

export default App;
//
