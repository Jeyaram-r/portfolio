import React from "react";
import "./Project.css";

const projects = [
  {
    name: "Helmet Shop (MERN)",
    description:
      "Full-stack e-commerce app built with React, Node.js, Express and MongoDB. Features product listing, cart, checkout and admin panel.",
    image: "/public/images/helmetshop.png",
    github: "https://github.com/jeyaramr/mern_healmet-shop-main",
    live: "https://helmetshop.vercel.app",
    tech: ["React", "Node.js", "Express", "MongoDB"],
  },
  {
    name: "E-Learning Dashboard",
    description:
      "Personalized learning platform with quizzes, resources and progress tracking built using PHP & MySQL.",
    image: "/public/images/elearning.png",
    github: "https://github.com/jeyaramr/elearning-dashboard",
    tech: ["PHP", "MySQL", "JavaScript"],
  },
  {
    name: "Crop Recomendation and Guidance",
    description:
      "This project is a web-based system that helps farmers select the best crop based on soil fertility and environmental conditions. Users can enter soil details such as pH, NPK values, and moisture to get suitable crop recommendations using machine learning. The system also provides market price information to support better farming decisions. It improves productivity through data-driven agriculture.",
    image: "/public/images/fitness.png",
    github: "https://github.com/Jeyaram-r/crop_predict_soil_fertility",
    live: "https://crop-predict-soil-fertility.onrender.com/",
    tech: ["Python", "Django", "Render","Machine Learning"],
  },
];

export default function Project() {
  return (
    <section id="projects" className="projects-section">
      <div className="projects-container">
        <h2 className="projects-title">My Projects</h2>

        <div className="projects-grid">
          {projects.map((p, i) => (
            <article key={i} className="project-card">
              {p.image ? (
                <div className="project-image-wrap">
                  <img
                    src={p.image}
                    alt={p.name}
                    className="project-image"
                    onError={(e) => {
                      e.target.style.display = "none";
                      // optional: e.target.parentNode.classList.add('no-image');
                    }}
                  />
                </div>
              ) : null}

              <div className="project-body">
                <h3 className="project-name">{p.name}</h3>
                <p className="project-desc">{p.description}</p>

                <div className="project-tech">
                  {p.tech.map((t, idx) => (
                    <span key={idx} className="tech-badge">
                      {t}
                    </span>
                  ))}
                </div>

                <div className="project-links">
                  <a
                    href={p.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-outline"
                  >
                    GitHub
                  </a>
                  {p.live && (
                    <a
                      href={p.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-primary"
                    >
                      Live Demo
                    </a>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="projects-footer">
          <a
            href="https://github.com/Jeyaram-r?tab=repositories"
            target="_blank"
            rel="noopener noreferrer"
            className="view-all"
          >
            View all projects on GitHub →
          </a>
        </div>
      </div>
    </section>
  );
}
