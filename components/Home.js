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
      <h1 data-aos="fade-right">Junior front end developer</h1>
      <p data-aos="fade-left">
      My name is Noureddine Bachikh, I am front end developer with experience in back end. Building state-of-the-art, easy-to-use, user-friendly websites and applications is truly a passion of mine and I am confident I would be an excellent addition to your organization. In addition to my knowledge base, I actively seek out new technologies and stay up-to-date on industry trends and advancements.</p>
      <p data-aos="fade-right">
      I've attached a copy of my resume detailing my experience, along with links to websites and applications I’ve had the honor of working on.
      </p>
      <button data-aos="fade-left">
          <a href="https://drive.google.com/file/d/1fVaNhrSiOYsSeqHSJMo-ioFqO2WdmWoE/view?usp=sharing" target="_blank">Download My Resume</a>
      </button>
    </div>
  );
}

export default Home;
