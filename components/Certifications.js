import React , {useEffect}from "react";
import { Certifi } from "../data/Certifications";
import  AOS  from "aos";
import Image from "next/image";

function Certifications() {
  useEffect(()=>{
    AOS.init({
      duration : 1000,
      once: true
    })
  })
  return (
    <div data-aos="fade-up">
      <h1 className="my-3">Certifications</h1>
      <div className="Certifications">
        {Certifi.map((Element) => (
          <div key={Element.id} >
            <div className="card">
              <Image
                src={Element.image}
                className="card-img-top"
                width="600"
                height="400"
                alt={Element.alt}
              />
              <div className="card-body">
                <h5 className="card-title">{Element.title}</h5>
                <p className="card-text">{Element.from}</p>
                <a target="_blank" href={Element.src} className="btn btn-primary ">
                  Show Certification
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Certifications;
