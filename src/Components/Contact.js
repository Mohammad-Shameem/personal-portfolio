import React, { useState } from "react";
import vg from "../assets/vg.png";
import { BiMailSend } from "react-icons/bi";
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
  return (
    <div id="contact">
      <section>
        <form onSubmit={handleSubmit}>
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
          <button type="submit">
            Send <BiMailSend />
          </button>
        </form>
      </section>
      <aside>
        <img src={vg} alt="contact-grapic"></img>
      </aside>
    </div>
  );
};

export default Contact;
