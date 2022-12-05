import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

const Timeline = () => {
  const [timelineData, setTimelineData] = useState([]);
  useEffect(() => {
    fetch(
      "https://raw.githubusercontent.com/Mohammad-Shameem/blankRep/main/projects.json"
    )
      .then((res) => res.json())
      .then((data) => setTimelineData(data));
  }, []);

  return (
    <div id="timeline">
      <div className="timelineBox">
        {timelineData.map((i, index) => (
          <TimelineItem
            key={i.id}
            heading={i.name}
            text={i.date}
            index={index}
          ></TimelineItem>
        ))}
      </div>
    </div>
  );
};
const TimelineItem = ({ heading, text, index }) => {
  const animation = {
    whileInView: {
      x: 0,
      y: 0,
      opacity: 1,
    },
    odd: {
      opacity: 0,
      x: 200,
    },
    even: {
      opacity: 0,
      x: -300,
    },
  };
  return (
    <div
      className={`timelineItem ${
        index % 2 === 0 ? "leftTimeline" : "rightTimeline"
      }`}
    >
      <motion.div
        whileInView={animation.whileInView}
        initial={index % 2 === 0 ? animation.even : animation.odd}
        // transition={index % 2 === 0 ? { delay: 0.2 } : { delay: 0.3 }}
        transition={{ ease: "easeIn", duration: 0.5 }}
      >
        <div>
          <h2>{heading}</h2>
          <p>{text}</p>
        </div>
      </motion.div>
    </div>
  );
};

export default Timeline;
