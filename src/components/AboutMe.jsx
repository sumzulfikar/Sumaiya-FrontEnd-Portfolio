import React from "react";
import assets from "/assets/my-pic.png"
import Resume from "./Resume";
const AboutMe = () => {
    const openLinkedin = () => {
        const liUrl = "https://www.linkedin.com/in/sumaiya-zulfikar/";
        window.open(liUrl, "_blank");
    }
    const openGithub = () => {
        const gitUrl = "https://github.com/sumzulfikar";
        window.open(gitUrl, "_blank")
    }

    return (
        <section className="component mx-1 md:mx-10 ">
            <div className="flex flex-row  max-sm:flex-wrap gap-4 ">
                <div className="relative flex flex-col col-span-2 rounded-xl bg-white bg-clip-border text-gray-700 shadow-md basis-1/2">
                    <div className="relative mx-4 mt-4  rounded-xl bg-white bg-clip-border text-gray-700 shadow-lg">
                        <img src={assets} alt="profile-picture" className=" flex justify-center rounded-full" />
                    </div>
                    <div className="p-6 text-center">
                        <h4 className="mb-2 block font-sans text-2xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
                            Sumaiya Zulfikar
                        </h4>
                        <p className="block bg-gradient-to-tr from-pink-600 to-pink-400 bg-clip-text font-sans text-base font-medium leading-relaxed text-transparent antialiased">
                            Front End Developer
                        </p>
                        <button className="p-4  mb-4 bg-gray-900 text-white rounded mx-5 space-x-1.5 " onClick={openGithub}>Github</button>
                        <Resume />
                    </div>
                </div>
                <div>

                    <div className="mt-4 rounded-xl col-span-8 bg-white shadow-lg">
                        <h2 className=" text-center text-3xl  font-bold py-2 basis-1/2">About Me</h2>
                        <p className="text-wrap p-5"> <p className=" font-semibold">Putting User Needs First</p> Embarking on an exciting journey as a Front-End Developer, I am here to build products that customers love.
                            With a track record of leading teams to peak performance and driving business agility, I am now diving into a new adventure.
                            <br />
                            <p className=" font-semibold">Empowering Users, Captivating Market</p>
                            I am passionate in crafting solutions that address real challenges and align with market demand.
                            <p className=" font-semibold">Innovate with Impact</p>
                            Join me in solving problems with user-centric approach, leveraging the latest  tech stack for product development.
                            <br />
                            <br />
                            Get in touch!
                        </p>
                        <button className="p-4   bg-gray-900 text-white rounded mx-5" onClick={openLinkedin}>Linkedin</button>


                    </div>
                </div>


            </div>



        </section>
    );


}

export default AboutMe;