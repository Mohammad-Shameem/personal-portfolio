import Header from "./Components/Header";
import Home from "./Components/Home";
import Projects from "./Components/Projects";
import Services from "./Components/Services";
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
    </>
  );
}

export default App;
