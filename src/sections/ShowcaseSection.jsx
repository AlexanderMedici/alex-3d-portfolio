import { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const projects = [
  {
    title: "Retro Platformer Mario",
    description:
      "The static website integrates server-side rendering to serve pre-built HTML, CSS, and JavaScript files.",
    image: "/images/project1.png",
    accent: "#d9f0ff",
  },
  {
    title: " Crypto Transfer App",
    description:
      "A full-fledged application which allows users to send transactions anywhere in the world, through the blockchain.",
    image: "/images/project2.png",
    accent: "#fff1e0",
  },
  {
    title: "Ecommerce App",
    description: "Vybe is a full-stack e-commerce app built on the MERN stack.",
    image: "/images/project3.png",
    accent: "#ffe8ed",
  },
  {
    title: "Stock WatchList",
    description:
      "Finsage is a Next.js app that helps retail investors research, track, and optimize their portfolios. ",
    image: "/images/project4.png",
    accent: "#e5f4ff",
  },
  {
    title: "Crypto Watch",
    description:
      "Quick overview: CoinScope is a lightweight crypto dashboard built with React 19 + Vite. It pulls data from the CoinGecko API and uses React Router for navigation..",
    image: "/images/project5.png",
    accent: "#f0e7ff",
  },
  {
    title: " Dijkstra's algorithm",
    description:
      "App makes use of Dijkstra's algorithm. The project displays a graphed board where predetermined starting (top left box) and ending (bottom right box) nodes are provided.",
    image: "/images/project6.png",
    accent: "#ffe0ea",
  },
  {
    title: "Minimalist Site",
    description:
      "Conversion-led hero, focused pricing, and crisp interaction cues.",
    image: "/images/project7.png",
    accent: "#ffe7d6",
  },
];

const AppShowcase = () => {
  const sectionRef = useRef(null);

  useGSAP(() => {
    // Animation for the main section
    gsap.fromTo(
      sectionRef.current,
      { opacity: 0 },
      { opacity: 1, duration: 1.5 }
    );

    // Animations for each app showcase
    gsap.utils.toArray(".project-card").forEach((card, index) => {
      gsap.fromTo(
        card,
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          delay: 0.12 * (index + 1),
          scrollTrigger: {
            trigger: card,
            start: "top bottom-=80",
          },
        }
      );
    });
  }, []);

  return (
    <div id="work" ref={sectionRef} className="app-showcase">
      <div className="showcaselayout">
        {projects.map((project) => (
          <article key={project.title} className="project-card">
            <div
              className="project-image-wrapper"
              style={{ background: project.accent }}
            >
              <img src={project.image} alt={project.title} />
            </div>
            <div className="project-text">
              <h2>{project.title}</h2>
              <p>{project.description}</p>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
};

export default AppShowcase;
