import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const Hero = () => {
  useGSAP(() => {
    gsap.fromTo(
      ".hero-title span",
      { y: 50, opacity: 0 },
      { y: 0, opacity: 1, stagger: 0.15, duration: 1, ease: "power2.out" }
    );
  });

  return (
    <section id="hero" className="hero-landing">
      <div className="hero-frame">
        <div className="hero-grid-lines">
          <span className="line horizontal" />
          <span className="line vertical left" />
          <span className="line vertical center" />
        </div>

        <header className="hero-left">
          <div className="hero-topline">
            <span>2026</span>
            <span>creative</span>
            <span>portfolio</span>
          </div>

          <div className="hero-title">
            <span>ALEXANDER</span>
            <span>MEDICI</span>
          </div>
        </header>

        {/* <figure className="hero-photo">
          <img src="/images/hero-photo.jpg" alt="Portrait in a library" />
        </figure> */}
      </div>
    </section>
  );
};

export default Hero;
