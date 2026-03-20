import React from "react";

export default function Hero() {
  return (
    <section
      id="home"
      style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: "linear-gradient(135deg, #0f172a, #1e293b)",
        color: "white",
        textAlign: "center",
        padding: "40px 20px",
      }}
    >
      <div style={{ maxWidth: "700px" }}>
        <h1
          style={{
            fontSize: "3rem",
            marginBottom: "10px",
            fontWeight: "700",
          }}
        >
          Hi, I'm <span style={{ color: "#38bdf8" }}>Jeyaram</span> 👋
        </h1>

        <p
          style={{
            fontSize: "1.2rem",
            color: "#cbd5f5",
            marginBottom: "25px",
          }}
        >
          B.E Graduate • Web Developer • Mobile Application Developer
        </p>

        <div style={{ display: "flex", gap: "15px", justifyContent: "center" }}>
          <a
            href="#projects"
            style={{
              padding: "12px 24px",
              background: "#38bdf8",
              color: "white",
              borderRadius: "8px",
              textDecoration: "none",
              fontWeight: "600",
              transition: "0.3s",
            }}
          >
            View My Work
          </a>

          <a
            href="#contact"
            style={{
              padding: "12px 24px",
              border: "2px solid #38bdf8",
              color: "#38bdf8",
              borderRadius: "8px",
              textDecoration: "none",
              fontWeight: "600",
              transition: "0.3s",
            }}
          >
            Contact Me
          </a>
        </div>
      </div>
    </section>
  );
}