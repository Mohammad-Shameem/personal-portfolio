import React, { useEffect, useState } from "react";

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
    <div id="experience">
      <div className="timelineBox">
        {timelineData.map((i, index) => (
          <TimelineItem
            key={index}
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
  return (
    <div
      className={`timelineItem ${
        index % 2 === 0 ? "leftTimeline" : "rightTimeline"
      }`}
    >
      <div>
        <h2>{heading}</h2>
        <p>{text}</p>
      </div>
    </div>
  );
};

export default Timeline;
