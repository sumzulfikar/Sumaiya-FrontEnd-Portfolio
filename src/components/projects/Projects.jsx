import React from "react";
import projectData from "../projects/projects.json"

const Projects=()=>{
    return(
        <section>
            <h2>My Portfolio</h2>
            {projectData.myprojects.map((project)=>(

            <div key={project.key} className="max-w-sm rounded overflow-hidden shadow-lg">
                <img className="w-full" src={project.src} alt={project.title} id="proj-img"/>
                    <div className="px-6 py-4">
                        <div className="font-bold text-xl mb-2" id="pro-title">{project.title}</div>
                            <p className="text-gray-700 text-base" id="proj-desc">
                                {project.description}
                            </p>
                        </div>
                    <div className="px-6 pt-4 pb-2">
                        <div className="flex flex-wrap">
                            {project.madeby.map((techtype,index)=>
                            <span key={index} className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2" id="proj-techstack">{techtype}</span>
                            )}
                        
                        </div>
                        
                 
                     </div>
                     <div>
                        <a href={project.repo}>gitHub</a>
                     </div>
                     <div><a href={project.live}>Url</a></div>
            </div>

            )
            
            
            
            
            
            
            
            )}
            

        </section>
    );

}
export default Projects;
