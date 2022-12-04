import React, { useEffect, useState } from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const Projects = () => {
  const [projectsData, setProjectsData] = useState([]);
  useEffect(() => {
    fetch(
      "https://raw.githubusercontent.com/Mohammad-Shameem/blankRep/main/projects.json"
    )
      .then((res) => res.json())
      .then((data) => setProjectsData(data));
  }, []);

  return (
    <div id="projects">
      <h2>PROJECTS</h2>
      <section>
        <article>
          <Carousel
            autoPlay={true}
            infiniteLoop={true}
            interval={2000}
            autoFocus={true}
            showArrows={false}
            showIndicators={false}
            showStatus={false}
            showThumbs={false}
          >
            {projectsData.length > 0
              ? projectsData.map((i, index) => (
                  <div key={index} className="projects-item">
                    <img src={i.img} alt={i.title}></img>
                    <aside>
                      <h3>{i.title}</h3>
                      <a target={"_blank"} rel={"noreferrer"} href={i.live}>
                        View Demo
                      </a>
                    </aside>
                  </div>
                ))
              : ""}
          </Carousel>
        </article>
      </section>
    </div>
  );
};

export default Projects;
