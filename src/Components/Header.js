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
      <a
        href="https://drive.google.com/file/d/1KYAwn0DYzaGb3x0vZM1TN0g-bfG4wDw4/view?usp=share_link"
        target={"blank"}
        download
      >
        <button>Resume</button>
      </a>
    </>
  );
};

export default Header;
