import { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const projects = [
  {
    title: "On-Demand Rides Made Simple",
    description: "A sleek ride-hailing experience with intuitive booking.",
    image: "/images/project1.png",
    accent: "#d9f0ff",
  },
  {
    title: "The Library Management Platform",
    description: "Track titles, readers, and recommendations with ease.",
    image: "/images/project2.png",
    accent: "#fff1e0",
  },
  {
    title: "YC Directory Startup Hub",
    description: "Discover and connect with emerging founders quickly.",
    image: "/images/project3.png",
    accent: "#ffe8ed",
  },
  {
    title: "Smart Mobility Companion",
    description: "Route planning and payments unified in one dashboard.",
    image: "/images/project1.png",
    accent: "#e5f4ff",
  },
  {
    title: "Digital BookShelf",
    description: "Curated reading journeys with rich metadata.",
    image: "/images/project2.png",
    accent: "#ffe7d6",
  },
  {
    title: "Founder Showcase",
    description: "Pitch-ready profiles and investor outreach tools.",
    image: "/images/project3.png",
    accent: "#ffe0ea",
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
