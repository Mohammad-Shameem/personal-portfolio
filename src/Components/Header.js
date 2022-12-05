import React from "react";
import { TfiMenuAlt } from "react-icons/tfi";

const Header = ({ menuOpen, setMenuOpen }) => {
  console.log(menuOpen);
  return (
    <>
      <nav>
        <NavContent setMenuOpen={setMenuOpen} />

        <button onClick={() => setMenuOpen(!menuOpen)} className="navBtn">
          <TfiMenuAlt />
        </button>
      </nav>
    </>
  );
};

export const HeaderPhone = ({ menuOpen, setMenuOpen }) => {
  return (
    <div className={`navPhone ${menuOpen ? "navPhoneComes" : ""}`}>
      <NavContent setMenuOpen={setMenuOpen} />
    </div>
  );
};

const NavContent = ({ setMenuOpen }) => {
  return (
    <>
      <h2>Shameem</h2>
      <div>
        <a href="#home" onClick={() => setMenuOpen(false)}>
          Home
        </a>
        <a href="#work" onClick={() => setMenuOpen(false)}>
          Projects
        </a>
        <a href="#timeline" onClick={() => setMenuOpen(false)}>
          Experience
        </a>
        <a href="#services" onClick={() => setMenuOpen(false)}>
          Services
        </a>
        <a href="#testimonial" onClick={() => setMenuOpen(false)}>
          Testimonial
        </a>
        <a href="#contact" onClick={() => setMenuOpen(false)}>
          Contact
        </a>
      </div>
      <a
        href="https://drive.google.com/file/d/1KYAwn0DYzaGb3x0vZM1TN0g-bfG4wDw4/view?usp=share_link"
        target={"blank"}
        download
      >
        <button onClick={() => setMenuOpen(false)}>Resume</button>
      </a>
    </>
  );
};

export default Header;
