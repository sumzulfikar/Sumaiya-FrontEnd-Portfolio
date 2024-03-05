import React from "react";

const AboutMe=()=>{
    const openLinkedin=()=>{
        const liUrl="https://www.linkedin.com/in/sumaiya-zulfikar/";
        window.open(liUrl, "_blank");
    }
    const openGithub=()=>{
        const gitUrl="https://github.com/sumzulfikar";
        window.open(gitUrl,"_blank")
    }

return(
    <>
    <div className="md:7/12 lg:w-6/12">
        <h2 className="text-2xl  font-bold md:text-4xl">About Me</h2>
        <p className="mt-6 ">Placing user need at the heart of everything that I do, 
        I have applied Agile, Scrum and Lean Principles to help teams deliver project,
         products and goals on time, to scope and within budget. 
         Now I have found a new passion to build products myself! 
         I am finding out how much I love building things. This is fun. Enjoying the Bootcamp!</p>
     </div>
     <button type="btn btn-primary" onClick={openLinkedin}>Linkedin</button>
     <button type="btn btn-primary" onClick={openGithub}>Github</button>
     
     </>
);


}

export default AboutMe;