import React from "react";

import Navbar from './Navbar';
import Mission from './Mission';
import Contact from './Contact';
import AboutMe  from './AboutMe';
import TechStack from './TechStack';
import Projects from './projects/Projects';
import Footer from './Footer';

function Home() {
  
    return(
        <>
   
        <AboutMe/>
        <TechStack/>
        <Projects/>
        <Contact/>
        <Footer/>
        </>



    );
}

export default Home;