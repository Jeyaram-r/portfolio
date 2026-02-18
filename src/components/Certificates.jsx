import React from "react";
import "./Certificates.css";

export default function Certificates() {
  return (
    <section id="certificates" className="section cert-section">
      <h2 className="cert-title">Certificates</h2>

      <div className="cert-grid">

        <div className="cert-card">
          <h3>Zoho CRM Training</h3>
          <p>Certified by Zoho</p>
        </div>

        <div className="cert-card">
          <h3>Internship – Web Development</h3>
          <p>Completed internship experience</p>
        </div>

        <div className="cert-card">
          <h3>RPA Training</h3>
          <p>Robotic Process Automation basics</p>
        </div>

        <div className="cert-card">
          <h3>Python Programming (Beginner)</h3>
          <p>Certified course completion</p>
        </div>

      </div>
    </section>
  );
}
