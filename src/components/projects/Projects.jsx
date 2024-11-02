import React from "react";
import projectData from "../projects/projects.json"

import RuledPostit from "./RuledPostit";
import { Accordion, AccordionItem } from "@nextui-org/react";

const Projects = () => {
    return (
        <section className=" mx-1 p-0  bg-gray-100  ">
            <h2 className="text-center text-3xl font-bold py-2">My Projects</h2>

            <div className="grid gap-4 rounded-xl lg:grid-cols-4 md:grid-cols-3 content-center bg-gray-50 sm:grid-cols-2  xs:grid-cols-2">
                {projectData.myprojects.map((project) => (
                    <div key={project.id} className="max-w-sm rounded overflow-hidden shadow-lg py-2 px-2">
                        <div className="font-bold text-xl mb-2 text-center" id="pro-title">{project.title}</div>
                        <img className="h-30" src={project.src} alt={project.title} id="proj-img" tooltip={project.src} />
                        <div className="px-6 py-4">
                            <p className="text-gray-700 text-base" id="proj-desc">
                                {project.description}
                            </p>
                        </div>
                        <div><Accordion>
                            <AccordionItem key={project.index} aria-label="User Story" className="text-lg font-medium text-gray-900" title="User Story:">

                                <RuledPostit userstory={project.userstory} />

                            </AccordionItem></Accordion>
                        </div>

                        <div className="px-6 pt-4 pb-2">
                            <div className="flex flex-wrap"><h3>Built with:</h3>
                                {project.madeby.map((techtype, index) =>
                                    <img key={index} src={techtype} className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2 object-scale-down h-16 w-16" id="proj-techstack" alt={`Made by ${project.title}`} />
                                )}

                            </div>


                        </div>


                        <a href={project.repo} className="px-3 md:px-4 py-1 bg-black text-stone-50 rounded space-x-11">GitHub Repo</a>
                        <span> </span>
                        <span> </span>
                        <span> </span>
                        <a href={project.live} className="px-3 md:px-4 py-1 bg-gray-900 text-stone-50 rounded space-x-11">Live Url</a></div>
                ))}
            </div>
        </section>
    );

}
export default Projects;
