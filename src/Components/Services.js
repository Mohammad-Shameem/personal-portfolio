import { motion } from "framer-motion";
import React from "react";
import { AiFillIeCircle } from "react-icons/ai";
import { TbWebhook } from "react-icons/tb";
import { SiWebmoney } from "react-icons/si";

const Services = () => {
  const animations = {
    whileInView: {
      x: 0,
      y: 0,
      opacity: 1,
    },
    one: {
      opacity: 0,
      x: "-100%",
    },
    two: {
      opacity: 0,
      y: "-100%",
    },
    three: {
      opacity: 0,
      x: "100%",
    },
    four: {
      opacity: 0,
      x: "100%",
    },
  };
  return (
    <div id="services">
      <h2>Services</h2>
      <section>
        <motion.div
          className="serviceBox1"
          whileInView={animations.whileInView}
          initial={animations.one}
        >
          <h3>1Y</h3>
          <p>Beginner Experience</p>
        </motion.div>
        <motion.div
          className="serviceBox2"
          whileInView={animations.whileInView}
          initial={animations.two}
          transition={{ delay: 0.3 }}
        >
          <AiFillIeCircle />
          <span>Web Development</span>
        </motion.div>
        <motion.div
          className="serviceBox3"
          whileInView={animations.whileInView}
          initial={animations.three}
          transition={{
            delay: 0.2,
          }}
        >
          <TbWebhook />
          <span>MERN Stack Development</span>
        </motion.div>
        <motion.div
          className="serviceBox4"
          whileInView={animations.whileInView}
          initial={animations.four}
        >
          <SiWebmoney />
          <span>Full Stack Development</span>
        </motion.div>
      </section>
    </div>
  );
};

export default Services;
