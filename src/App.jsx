import React from "react";
import "/src/index.css"
import Navbar from './components/Navbar';

import Mission from './components/Mission';
import Contact from './components/Contact';
import AboutMe  from './components/AboutMe';
import TechStack from './components/TechStack';
import Projects from './components/projects/Projects';
import Footer from './components/Footer';



function App() {
  
  return (
    <div>
      <Navbar/>
      <Mission/>
      <AboutMe/>
      <TechStack/>
      <Projects/>
      <Contact/>
      <Footer/>
    </div>
);

  
}

export default App
