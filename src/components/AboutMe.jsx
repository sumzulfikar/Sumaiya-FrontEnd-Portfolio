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
                        <h3 className=" font-semibold px-5 ">The User-Centric Champion</h3>
                        {/* <p className="text-wrap p-5">
                            They say software development is a balancing act, but for me, it's a symphony. My passion for user engagement started early on as a UI Designer. Crafting beautiful, intuitive interfaces that guided users seamlessly became my signature move. Every happy click confirmed what I always believed: happy users translate to happy clients (and successful projects!).
                        </p>
                        <p className="text-wrap p-5">
                            This dedication to user experience continued through my time as a Software Tester. I became a meticulous guardian, scrutinizing every line of code to ensure a flawless user journey. Bugs were vanquished, functionality perfected, all to create a product that was as reliable as it was delightful to use.
                        </p>
                        <p className="text-wrap p-5">Finally, as a Scrum Master, I transformed into the conductor, ensuring the development team played their parts in perfect harmony. My focus on efficiency and speed kept the development process moving like a well-oiled orchestra.</p>
                        <h3 className=" font-semibold">More Than Code, It's a User Experience</h3 > */}
                        <p className="text-wrap px-5"> I bring  diverse experience to the table, not just as a developer, but as a user-centric champion. I combine the power of user engagement, unwavering quality, and efficient development to craft beautiful, intuitive applications that are delivered on time. Every line of code I write, every design decision I make, reflects a deep empathy for the user journey.</p>
                        <br />
                        <br />
                        <h3 className=" font-semibold px-5 ">Ready to Build Something Remarkable (and Maybe Even a Little Fun)?</h3>
                        <p className="text-wrap px-5">Are you passionate about creating exceptional software? I'm eager to collaborate and leverage my skills to tackle exciting new challenges. Whether it's a cutting-edge mobile app or a game-changing web platform, I'm ready to dive in and contribute to innovative projects. </p>
                        <br />
                        <br />
                        <span className="text-wrap px-5" >Get in touch! Let's chat about your current needs and how I can be a valuable asset to your team.</span>
                        <br />
                        <br />
                        <button className="p-4   bg-gray-900 text-white rounded mx-5" onClick={openLinkedin}>Linkedin</button>


                    </div>
                </div>


            </div>



        </section>
    );


}

export default AboutMe;