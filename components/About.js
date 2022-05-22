import React , {useEffect}from "react";
import Certifications from "./Certifications";
import  AOS  from "aos";

function About() {
  useEffect(()=>{
    AOS.init({
      duration : 1000,
      once:true
    })
  })
  return (
    <div className="about" id="about" data-aos="fade-up">
      <h1 className="my-3">About Me</h1>
      <p >
        My name is Noureddine Bachikh, I am front end developer with experience
        in back end. Building state-of-the-art, easy-to-use, user-friendly
        websites and applications is truly a passion of mine and I am confident
        I would be an excellent addition to your organization. In addition to my
        knowledge base, I actively seek out new technologies and stay up-to-date
        on industry trends and advancements.
      </p>
      <div>
        <Certifications/>
      </div>
    </div>
  );
}

export default About;
