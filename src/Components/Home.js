import React, { useRef } from "react";
import { animate, motion } from "framer-motion";
import TypewriterComponent from "typewriter-effect";
import { BsArrowUpRight, BsChevronDown } from "react-icons/bs";
import own from "../assets/1669213441208-removebg-preview (2).png"; //etake bole default import
const Home = () => {
  const clientCounter = useRef();
  const projectsCounter = useRef();
  const animationClientsCount = () => {
    animate(0, 100, {
      duration: 2,
      onUpdate: (v) => {
        clientCounter.current.textContent = v.toFixed();
      },
    });
  };
  const animateProjectsCounter = () => {
    animate(0, 40, {
      duration: 2,
      onUpdate: (v) => {
        projectsCounter.current.textContent = v.toFixed();
      },
    });
  };
  const animation = {
    h1: {
      initial: {
        x: "-100%",
        opacity: "0",
      },
      whileInView: {
        duration: 5,
        x: "0",
        opacity: "1",
      },
    },
    buttton: {
      initial: {
        y: "-100%",
        opacity: "0",
      },
      whileInView: {
        y: "0",
        opacity: "1",
      },
    },
  };
  return (
    <>
      <div id="home">
        <section>
          <div>
            <motion.h1 {...animation.h1}>
              Hi, I am <br /> Shameem Ahmad
            </motion.h1>
            <TypewriterComponent
              options={{
                strings: [
                  "A MERN Stack Developer",
                  "A Full Stack Developer",
                  "A Programmer",
                ],
                autoStart: true,
                loop: true,
                cursor: "",
                wrapperClassName: "typewriter-effect",
              }}
            />
            <div>
              <a href="mailto: shameemahmad.sa7@gmail.com"> Hire Me</a>
              <a href="#work">
                {" "}
                Projects <BsArrowUpRight />
              </a>
            </div>

            {/* <article>
            <p>
              + <span>100</span>
            </p>
            <span>Clients world wide</span>
          </article>
          <aside>
            <article>
              <p>
                + <span>40</span>
              </p>
              <span>Projects Made</span>
            </article>
            <article special-data>
              <p>Contact</p>
              <span>shameemahmad.sa7@gmail.com</span>
            </article>
          </aside> */}
          </div>
        </section>
        <section>
          {" "}
          <img src={own} alt="Shameem Ahmad"></img>
        </section>
        <BsChevronDown />
      </div>
      <div className="article-box">
        <article>
          <p>
            +
            <motion.span
              ref={clientCounter}
              whileInView={animationClientsCount}
            ></motion.span>
          </p>
          <span>Clients world wide</span>
        </article>

        <article>
          <p>
            +{" "}
            <motion.span
              ref={projectsCounter}
              whileInView={animateProjectsCounter}
            ></motion.span>
          </p>
          <span>Projects Done</span>
        </article>
        <article special-data>
          <p>Contact</p>
          <span>shameemahmad.sa7@gmail.com</span>
        </article>
      </div>
    </>
  );
};

export default Home;
