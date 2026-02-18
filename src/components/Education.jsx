import React from "react";
import "./Education.css";

export default function Education() {
  return (
    <section id="education" className="section education-section">
      <h2 className="edu-title">Education</h2>

      <div className="edu-card">
        <h3>B.E Computer Science Engineering</h3>
        <p className="edu-inst">Kamaraj College of Engineering and Technology, Virudhunagar</p>
        <p className="edu-year">2022 – 2026</p>
        <p className="edu-info">Current CGPA: 8.2 </p>
      </div>

      <div className="edu-card">
        <h3>Higher Secondary (HSC)</h3>
        <p className="edu-inst">SMA Matriculation Higher Secondary School</p>
        <p className="edu-year">2022</p>
        <p className="edu-info">Percentage: 87%</p>
      </div>

      <div className="edu-card">
        <h3>Secondary School (SSLC)</h3>
        <p className="edu-inst">SMA Matriculation Higher Secondary School</p>
        <p className="edu-year">2020</p>
        <p className="edu-info">Percentage: 89%</p>
      </div>
    </section>
  );
}
