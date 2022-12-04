import React from "react";
import { AiOutlineArrowUp } from "react-icons/ai";
import { BsLinkedin } from "react-icons/bs";
import { FaFacebookSquare } from "react-icons/fa";
import { IoLogoGithub } from "react-icons/io";

const Footer = () => {
  return (
    <footer>
      <div>
        <img
          src="https://i.ibb.co/z2Mm1f8/1669213441208-removebg-preview-2.png"
          alt="Founder"
        ></img>
        <h2> Shameem Ahamd</h2>
      </div>
      <aside>
        <h2>Social Media</h2>
        <article>
          <a
            href="https://www.linkedin.com/in/shameem-ahmad-sa7/"
            target={"blank"}
          >
            <BsLinkedin />
          </a>
          <a href="https://www.facebook.com/Mehmetsaki778/" target={"blank"}>
            <FaFacebookSquare />
          </a>
          <a href="https://github.com/Mohammad-Shameem" target={"blank"}>
            <IoLogoGithub />
          </a>
        </article>
      </aside>
      <a href="#home">
        <AiOutlineArrowUp></AiOutlineArrowUp>
      </a>
      <span>
        <a href="mailto:shameemahmad.sa7@gmail.com">
          <button className="email-btn">Email</button>
        </a>
      </span>
    </footer>
  );
};

export default Footer;
