import React from "react";
import Contact from './Contact.jsx';
import AboutMe from './AboutMe';
import TechSkills from './TechStack/TechSkills.jsx';
import Projects from './projects/Projects';


function Home() {

    return (
        <>

            <AboutMe />
            <TechSkills />
            <Projects />
            <Contact />

        </>



    );
}

export default Home;