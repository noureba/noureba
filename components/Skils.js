import React , {useEffect}from "react";
import { skils } from "../data/skils";
import Image from "next/image";
import  AOS  from "aos";


function Skils() {
  useEffect(()=>{
    AOS.init({
      duration : 1000,
      once: true
    })
  })
  return (
    <div id="skils" className="skils" data-aos="fade-up">
      <h1 className="my-3">Skils</h1>
      <div className="Myskils">
        {skils.map((Element) => (
          <div key={Element.id}>
            <Image
              src={Element.image}
              alr={Element.title}
              width="100"
              height="100"
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Skils;
