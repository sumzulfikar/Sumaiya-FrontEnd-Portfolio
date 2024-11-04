import React from "react";
import Contact from './Contact.jsx';
import AboutMe from './AboutMe';
import TechSkills from './skills/TechSkills.jsx';
import Projects from './projects/Projects';
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