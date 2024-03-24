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
            <div className="flex flex-row  gap-4">
                <div className="relative flex w-96 flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md basis-1/2">
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

                    <div className="mt-4 rounded-xl bg-white shadow-lg">
                        <h2 className=" text-center text-3xl  font-bold py-2 basis-1/2">About Me</h2>
                        <p className="text-wrap p-5">Placing user need at the heart of everything that I do, I am <em>embarking</em> into a new and exciting journey as a Front-End Developer to build products that customers love. <br />
                            I have prior experience in leading organisations and teams to higher performance by increasing business agility capability in building impactful and valuable products that drive innovation, growth, revenue, and overall performance of the business. <br />
                            <br />Now I have found a new passion to build products myself!
                            Looking to bring in user focused approach to problem solving and developing solutions that meet customer and market needs.

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