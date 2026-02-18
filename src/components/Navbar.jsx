import React from "react";

export default function Navbar() {
  return (
    <header className="navbar">
      <div className="brand">Jeyaram</div>
      <nav className="links">
        <a href="#about">About</a>
        <a href="#education">Education</a>
        <a href="#projects">Projects</a>
        <a href="#contact">Contact</a>
      </nav>
    </header>
  );
}
