import React, { useEffect } from "react";
import { portfolio } from "../data/Portfolio";
import Image from "next/image";
import Link from "next/link";
import AOS from "aos";

function Portfolio() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  });

  return (
    <div className="portfolio" data-aos="fade-up" id="portfolio">
      <h1 className="my-3">Portfolio</h1>
      <div >
        {portfolio.map((Element) => (
          <div key={Element.id}>
            <figure class="imghvr-push-up">
              <Image src={Element.image} width="300" height="250" />
              <figcaption>
                <p>{Element.title}</p>
                <p>{Element.desc}</p>
                <div>
                  <Link href="#">Demo</Link>
                  <Link href="#">Code</Link>
                </div>
                <div></div>
              </figcaption>
              <a href="http://www.imagehover.io"></a>
            </figure>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Portfolio;
