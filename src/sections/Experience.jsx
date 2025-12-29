import { useState } from "react";

const timelineData = [
  {
    title: "Full Stack Developer",
    company: "Scarborough Health Network",
    year: "Oct 2022 - Present",
    description:
      "Build responsive, high-performing web apps that stay maintainable at scale.",
    categories: ["Development", "SEO", "Responsiveness", "Animations"],
    responsibilities: [
      "Engineered reusable React/MUI component libraries, accelerating delivery across teams.",
      "Architected Node microservices and messaging for 4k+ employees with strong SLAs.",
      "Optimized SQL and API performance to cut response times by 50% on core flows.",
      "Integrated secure data import pipelines with third-party APIs and validation.",
    ],
  },
  {
    title: "Full Stack Developer",
    company: "Freelance",
    year: "Jun 2022 - Sept 2022",
    description:
      "Shipped modern product sites with conversion-focused flows and clean UX.",
    categories: ["E-commerce", "Performance", "Accessibility"],
    responsibilities: [
      "Built mobile-first routing and booking with Google Maps to serve 10k+ riders.",
      "Refactored a legacy checkout with Stripe, cutting time-to-pay by 20%.",
      "Modernized React UI with Styled Components, reducing UI bugs and churn.",
      "Delivered sprint goals on time alongside product/design in Agile cycles.",
    ],
  },
  {
    title: "Full Stack Developer",
    company: "Contract",
    year: "2018 - 2022",
    description:
      "Partnered with teams to modernize legacy stacks and improve reliability.",
    categories: ["Refactors", "API Design", "Mobile-first"],
    responsibilities: [
      "Scaled a mobile-first routing platform with resilient APIs and telemetry.",
      "Improved e-commerce conversion via optimized flows and payments.",
      "Reduced UI defects by rebuilding components with modern patterns.",
      "Shipped continuously with product and engineering under tight deadlines.",
    ],
  },
];

const Experience = () => {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section id="experience" className="experience-section">
      <div className="experience-frame">
        <div className="experience-topline">
          <span>2028</span>
          <span>creative</span>
          <span>portfolio</span>
          <span>photography</span>
        </div>

        <div className="experience-body">
          <div className="experience-heading">
            <span>WORK</span>&nbsp;&nbsp;
            <span>EXPERIENCE</span>
          </div>

          <div className="experience-list accordion">
            {timelineData.map((card, index) => {
              const isOpen = openIndex === index;
              const number = (index + 1).toString().padStart(3, "0");

              return (
                <article
                  key={card.title}
                  className={`timeline-card accordion-item ${
                    isOpen ? "open" : ""
                  }`}
                >
                  <button
                    className="accordion-header"
                    onClick={() => setOpenIndex(isOpen ? -1 : index)}
                    aria-expanded={isOpen}
                  >
                    <span className="accordion-number">({number})</span>
                    <div className="accordion-title">
                      <h3>{card.title}</h3>
                      <p className="experience-meta">
                        {card.company} · {card.year}
                      </p>
                    </div>
                    <span className="accordion-icon">{isOpen ? "×" : "+"}</span>
                  </button>

                  <div
                    className={`accordion-content ${isOpen ? "show" : ""}`}
                    aria-hidden={!isOpen}
                  >
                    <div className="experience-content-grid">
                      <div className="experience-desc-wrap">
                        <p className="experience-desc">{card.description}</p>
                        <button className="cta-button alt">View Role</button>
                      </div>
                      <div className="experience-tags">
                        <p className="experience-meta label">Categories</p>
                        <div className="tag-wrap">
                          {card.categories.map((tag) => (
                            <span key={tag} className="tag">
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>

                    <ul className="responsibility-list">
                      {card.responsibilities.map(
                        (responsibility, itemIndex) => (
                          <li key={itemIndex}>{responsibility}</li>
                        )
                      )}
                    </ul>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
