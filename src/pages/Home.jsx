import React from "react";
import HomeTop from "../components/HomeTop.jsx";
import About from "../components/About.jsx";
import Skills from "../components/Skills.jsx";
import Projects from "../components/Projects.jsx";
import Contact from "../components/Contact.jsx";

export default function Home() {

  return (
    <>
     <HomeTop/>
     <About/>
     <Skills/>
     <Projects/>
     <Contact/>
    </>

  );
}