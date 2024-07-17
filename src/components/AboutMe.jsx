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
        <section className="mx-1 p-10  m-1">
            <div className="flex lg:flex-row  md:flex-row   max-sm:flex-col gap-4 ">
                <div className=" flex flex-col rounded-xl bg-clip-border text-gray-700 shadow-md  md:basis-full">
                    <div className=" flex justify-center  ">
                        <img src={assets} alt="profile-picture" className="m-4 rounded-full" />
                    </div>
                    <div className="p-6 text-center">
                        <h4 className="mb-2 block  text-2xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
                            Sumaiya Zulfikar
                        </h4>
                        <p className="block bg-gradient-to-tr from-pink-600 to-pink-400 bg-clip-text text-base font-medium leading-relaxed text-transparent antialiased">
                            Front End Developer
                        </p>
                        <button className="px-5 py-2 bg-gray-900 text-white rounded-full" onClick={openGithub}>Github</button>
                        <Resume />
                    </div>
                </div>
                <div>

                    <div className="mx-1 p-10  m-1 rounded-xl col-span-8 bg-white shadow-lg text-justify">
                        <h2 className=" text-center text-3xl  font-bold basis-1/2">About Me</h2>
                        <h3 className=" font-semibold px-5 ">The User-Centric Champion</h3>
                        <p className="text-wrap px-5  tracking-tight"> I bring  diverse experience to the table, not just as a developer, but as a user-centric champion. I combine the power of user engagement, unwavering quality, and efficient development to craft beautiful, intuitive applications that are delivered on time. Every line of code I write, every design decision I make, reflects a deep empathy for the user journey.</p>
                        <br />

                        <h3 className=" font-semibold px-5 ">Ready to Build Something Remarkable (and Maybe Even a Little Fun)?</h3>
                        <p className="text-wrap px-5 tracking-tight">I thrive in dynamic environments where I can contribute to all stages of the development lifecycle. Whether it's breathing new life into existing web applications, implementing innovative features, or building entirely new products from the ground up, I'm passionate about tackling challenges and delivering exceptional results.</p>

                        <br />
                        <p className="text-wrap px-5 tracking-tight" >Get in touch! Let's chat about your current needs and how I can be a valuable asset to your team.</p>
                        <br />

                        <button className="px-4 py-2 bg-gray-900 text-white rounded-full mx-5" onClick={openLinkedin}>Linkedin</button>


                    </div>
                </div>


            </div>



        </section>
    );


}

export default AboutMe;