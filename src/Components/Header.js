import React from "react";

const Header = () => {
  return (
    <nav>
      <NavContent />
    </nav>
  );
};
const NavContent = () => {
  return (
    <>
      <h2>Shameem</h2>
      <div>
        <a href="#home">Home</a>
        <a href="#projects">Projects</a>
        <a href="#experience">Experience</a>
        <a href="#services">Services</a>
        <a href="#testimonial">Testimonial</a>
        <a href="#contact">Contact</a>
      </div>
      <a href="mailto:shameemahmad.sa7@gmail.com">
        <button>Email</button>
      </a>
    </>
  );
};

export default Header;
//
