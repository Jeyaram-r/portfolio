import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Skills from "./components/Skills";
import Certificates from "./components/Certificates";
import Education from "./components/Education";

import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import "./index.css";

function App(){
  return (
    <div>
      {/* <Navbar /> */}
      <main>
        <Hero />
        
        
        
        <Contact />
        <footer className="footer">© {new Date().getFullYear()} Jeyaram — Built with React</footer>
      </main>
    </div>
  );
}
export default App;
