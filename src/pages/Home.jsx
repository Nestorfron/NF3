import React from "react";
import HomeTop from "../components/HomeTop.jsx";
import About from "../components/About.jsx";
import Skills from "../components/Skills.jsx";



export default function Home() {

  return (
    <>
     <HomeTop/>
     <About/>
     <Skills id="skills"/>
    </>

  );
}