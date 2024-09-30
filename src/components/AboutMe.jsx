import React from "react";
// import assets from "/assets/my-pic.png"
// import Resume from "./Resume";
import Profile from "./Profile";
const AboutMe = () => {

    const openCalendar = () => {
        const inviteUrl = "https://calendar.app.google/eLjxfAL31TgVpNt59";
        window.open(inviteUrl, "_blank");
    }

    return (
        <section className="mx-1 p-0 md:p-10 m-1">
            <div className="flex lg:flex-row  md:flex-row   max-sm:flex-col gap-4 ">
                <Profile />
                <div>

                    <div className="mx-1  p-2 m-1 rounded-xl col-span-8 bg-white shadow-lg text-justify">
                        <h2 className=" text-center text-3xl  font-bold basis-1/2">About Me</h2>
                        <h3 className=" font-semibold px-5 ">User-Centric Focus</h3>
                        <p className="text-wrap px-5  "> I am a Front-End Developer with a passion in crafting user-centric web applications that delight users and drive business results. In the past, I have worked within engineering teams from designing prototypes, testing, and helping teams grow. I combine the power of user engagement, quality, and efficient development to craft beautiful, intuitive applications that are delivered on time. </p>
                        <br />

                        <h3 className=" font-semibold px-5 ">Ready to Build Something Remarkable (and Maybe Even a Little Fun)?</h3>
                        <p className="text-wrap px-5">I thrive in dynamic environments where I can contribute to all stages of the development lifecycle. Whether it's breathing new life into existing web applications, implementing innovative features, or building entirely new products from the ground up, I'm passionate about tackling challenges and delivering exceptional results.</p>

                        <br />
                        <p className="text-wrap px-5 divide-y divide-black " >Get in touch! Let's chat about your current needs and how I can be a valuable asset to your team.</p>
                        <br />
                        <button className="px-4 py-2 align-middle bg-gray-900 text-white rounded-full mx-5" onClick={openCalendar}>Schedule a Call</button>



                    </div>
                </div>


            </div>



        </section>
    );


}

export default AboutMe;