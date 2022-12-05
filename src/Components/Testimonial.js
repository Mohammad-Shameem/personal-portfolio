import React from "react";
import SlickSlider from "./SlickSlider";

const Testimonials = () => {
  return (
    <div id="testimonial">
      <h2>Testimonial</h2>
      <section>
        <TestimonialCard
          name={" Abdullah"}
          feedback={"Youre a good beginner."}
        ></TestimonialCard>
        <TestimonialCard
          name={" Ahmad"}
          feedback={"As a beginner always try to develope new skill."}
        ></TestimonialCard>
        <TestimonialCard
          name={" Sheikh"}
          feedback={"Try to learn some animations."}
        ></TestimonialCard>
      </section>
      <SlickSlider></SlickSlider>
    </div>
  );
};
const TestimonialCard = ({ name, feedback }) => {
  return (
    <article>
      <img
        src="https://cdn-icons-png.flaticon.com/512/149/149071.png"
        alt="user"
      ></img>
      <h4>{name}</h4>
      <p>{feedback}</p>
    </article>
  );
};

export default Testimonials;
