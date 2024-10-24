import React from "react";
import Contact from './Contact.jsx';
import AboutMe from './AboutMe';
import TechSkills from './skills/TechSkills.jsx';
import Projects from './projects/Projects';
// import Resume from "./Resume.jsx";

function Home() {

    return (
        <>

            <AboutMe />
            <TechSkills />
            <Projects />
            {/* <Resume /> */}
            {/* <Contact /> */}

        </>



    );
}

export default Home;