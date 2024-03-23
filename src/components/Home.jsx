import React from "react";
import Contact from './Contact.jsx';
import AboutMe from './AboutMe.jsx';
import TechStack from './Techstack/TechStack.jsx';
import Projects from './projects/Projects.jsx';


function Home() {

    return (
        <>

            <AboutMe />
            <TechStack />
            <Projects />
            <Contact />

        </>



    );
}

export default Home;