import React from "react";
import projectData from "../projects/projects.json"
import RuledPostit from "./RuledPostit";
import { Accordion, AccordionItem } from "@nextui-org/react";
const Projects = () => {
    return (
        <section className="component  bg-white mx-1 md:mx-10 ">
            <h2 className="text-center text-3xl   font-bold py-2">My Projects</h2>

            <div className="flex flex-row flex-wrap justify-center py-2 px-2 gap-4 bg-gray-50">
                {projectData.myprojects.map((project) => (
                    <div key={project.id} className="max-w-sm rounded overflow-hidden shadow-lg py-2 px-2">
                        <img className="w-full" src={project.src} alt={project.title} id="proj-img" />
                        <div className="px-6 py-4">
                            <div className="font-bold text-xl mb-2" id="pro-title">{project.title}</div>
                            <p className="text-gray-700 text-base" id="proj-desc">
                                {project.description}
                            </p>
                        </div>
                        <div><Accordion>
                            <AccordionItem key={project.index} aria-label="The Problem Solved" title="The Problem Solved">
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


                        <a href={project.repo} className="px-3 md:px-4 py-1 bg-black text-white rounded space-x-11">GitHub Repo</a>
                        <span> </span>
                        <span> </span>
                        <span> </span>
                        <a href={project.live} className="px-3 md:px-4 py-1 bg-gray-900 text-white rounded space-x-11">Live Url</a></div>
                ))}
            </div>
        </section>
    );

}
export default Projects;
