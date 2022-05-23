import React, { useEffect } from "react";
import AOS from "aos";
function Home() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  });
  return (
    <div className="home" id="home">
      <h1 data-aos="fade-right">Frontend Developer</h1>
      <p data-aos="fade-left">
        I have designed, developed, and launched customized, highly responsive
        websites and e-commerce solutions using advanced technologies. In
        addition, I have consistently met client expectations and project
        milestones while working effectively in deadline-driven environments.{" "}
      </p>
      <p data-aos="fade-right">
        I've attached a copy of my resume detailing my experience, along with
        links to websites and applications I’ve had the honor of working on.
      </p>
      <button data-aos="fade-left">
          <a href="https://drive.google.com/file/d/136Jb5zUvuGomjePx2tmHDA5Yqptz35_C/view" target="_blank">Download My Resume</a>
      </button>
    </div>
  );
}

export default Home;
