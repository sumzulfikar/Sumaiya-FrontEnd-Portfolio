import React from "react";
import Contact from './Contact.jsx';
import AboutMe from './AboutMe.jsx';
import TechSkills from './skills/TechSkills.jsx';
import Projects from './projects/Projects.jsx';
// import Resume from "./Resume.jsx";

function Menu() {

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

export default Menu;