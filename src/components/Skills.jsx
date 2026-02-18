import React from "react";
import "./Skills.css";

export default function Skills() {
  return (
    <section id="skills" className="section skills-section">
      <h2 className="skills-title">Skills</h2>

      <div className="skills-grid">

        <div className="skill-card">
          <h3>Frontend</h3>
          <p>HTML, CSS, JavaScript, React.js</p>
        </div>

        <div className="skill-card">
          <h3>Backend</h3>
          <p>Node.js, Express.js, PHP</p>
        </div>

        <div className="skill-card">
          <h3>Database</h3>
          <p>MySQL, MongoDB</p>
        </div>

        <div className="skill-card">
          <h3>Tools & Platforms</h3>
          <p>Git, GitHub, VS Code, Postman</p>
        </div>

        <div className="skill-card">
          <h3>Other Skills</h3>
          <p>UI/UX, RPA basics, Problem-Solving</p>
        </div>

      </div>
    </section>
  );
}
