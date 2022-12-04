import React, { useState } from "react";
import vg from "../assets/vg.png";
import { BiMailSend } from "react-icons/bi";
import { motion } from "framer-motion";
import toast from "react-hot-toast";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const handleSubmit = () => {
    toast.success("Message Sent Successfully");
    setName("");
    setEmail("");
    setMessage("");

    return false; //for not reload after submit
  };
  const animations = {
    form: {
      whileInView: {
        x: 0,
        opacity: 1,
      },
      initial: {
        x: -100,
        opacity: 0,
      },
    },
    button: {
      whileInView: {
        y: 0,
        opacity: 1,
      },
      initial: {
        y: -100,
        opacity: 0,
      },
      transition: { duration: 0.5 },
    },
  };
  return (
    <div id="contact">
      <section>
        <motion.form onSubmit={handleSubmit} {...animations.form}>
          <h2>Contact Me</h2>
          <input
            type="text"
            placeholder="Your Name"
            onChange={(e) => setName(e.target.value)}
            value={name}
            required
          ></input>
          <input
            type="email"
            placeholder="Your Email"
            required
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          ></input>
          <input
            type="text"
            placeholder="Your Message"
            required
            style={{
              padding: "40px 0px",
            }}
            onChange={(e) => setMessage(e.target.value)}
            value={message}
          ></input>
          <motion.button type="submit" {...animations.button}>
            Send <BiMailSend />
          </motion.button>
        </motion.form>
      </section>
      <aside>
        <img src={vg} alt="contact-grapic"></img>
      </aside>
    </div>
  );
};

export default Contact;
