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
    <div className="about" id="Certifications" data-aos="fade-up">
      <div>
        <Certifications/>
      </div>
    </div>
  );
}

export default About;
