import React, { useEffect } from "react";
import { portfolio } from "../data/Portfolio";
import Image from "next/image";
import AOS from "aos";
import buttonStyle from "../styles/css/links.module.css"

function Portfolio() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  });

  return (
    <div className="portfolio" data-aos="fade-up" id="portfolio">
      <h1 className="py-3">Portfolio</h1>
      <div className="port">
        {portfolio.map((Element) => (
          <div className="card" key={Element.id} style={{width:"200"}}>
          <img src={Element.image} className="card-img-top" alt={Element.alt}/>
          <div className="card-body">
            <h5 className="card-title">{Element.title}</h5>
            <p className="card-text">{Element.desc}</p>
            <div className="d-flex flex-row">
            <a target="_blank" href={Element.demo} class={`${buttonStyle.buttons} mx-2 link`}>Demo</a>
            <a target="_blank" href={Element.code} class={`${buttonStyle.buttons} mx-5 link`}>Code</a>
            </div>
          </div>
        </div>
        ))}
       
      </div>
    </div>
  );
}

export default Portfolio;
