import React from "react";
import About from "scenes/about";
import Achievement from "scenes/achievement";
import Contact from "scenes/contact";
import Education from "scenes/education";
import Experience from "scenes/experience";
import Home from "scenes/home";
import NavHead from "scenes/navbar";
import Project from "scenes/project";
import Skills from "scenes/skills";

function Homepage() {
  return (
    <div>
      <NavHead />
      <Home />
      <Experience />
      <Achievement />
      <Project />
      <Education />
      <Skills />
      <Contact />
    </div>
  );
}

export default Homepage;
