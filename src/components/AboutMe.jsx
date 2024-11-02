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
        <section className="mx-1 p-0  m-1">
            <div className="flex lg:flex-row  md:flex-col   max-sm:flex-col gap-4 ">

                <Profile />

                <div>

                    <div className="mx-1 p-2 m-1 rounded-xl col-span-5  text-gray-900 bg-white shadow-lg text-align:left">
                        <h2 className=" text-center text-3xl  font-bold basis-1/2">About Me</h2>
                        
                        <p className="text-wrap pt-2">I am a Front-End Developer. I bring in user focused approach to problem solving and developing solutions that meet customer and market needs. In addition to coding, I have worked within engineering teams designing prototypes, testing, and helping teams build good quality software using Ken Beck's:<br />
                        </p>
                        <blockquote>
                            <p className="font-semibold text-gray-900 text-center pt-2"> Make it Work | Make it Right | Make it Fast.</p>
                        </blockquote>


                        <h3 className=" font-semibold pt-4">Ready to Build Something Remarkable (and Maybe Even a Little Fun)?</h3>
                        <p className="text-wrap pt-2">I love contributing to all stages of the development lifecycle to solve user problems. Whether it's breathing new life into existing web applications, implementing new features, or building entirely new products from scratch; I am ready to dive right in and deliver exceptional results.</p>


                        <p className="text-wrap divide-y divide-black pt-2" >Get in touch! Let's chat about your current needs and how I can be a valuable asset to your team.</p>
                        <div className="pt-2 flex justify-center">
                            <button className="flex items-center px-6 py-3 align-middle bg-gray-900 text-stone-50 rounded-md " onClick={openCalendar}><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="size-5">
                                <path d="M10 9.25a.75.75 0 0 0-.75.75v.01c0 .414.336.75.75.75h.01a.75.75 0 0 0 .75-.75V10a.75.75 0 0 0-.75-.75H10ZM6 13.25a.75.75 0 0 0-.75.75v.01c0 .414.336.75.75.75h.01a.75.75 0 0 0 .75-.75V14a.75.75 0 0 0-.75-.75H6ZM8 13.25a.75.75 0 0 0-.75.75v.01c0 .414.336.75.75.75h.01a.75.75 0 0 0 .75-.75V14a.75.75 0 0 0-.75-.75H8ZM9.25 14a.75.75 0 0 1 .75-.75h.01a.75.75 0 0 1 .75.75v.01a.75.75 0 0 1-.75.75H10a.75.75 0 0 1-.75-.75V14ZM12 11.25a.75.75 0 0 0-.75.75v.01c0 .414.336.75.75.75h.01a.75.75 0 0 0 .75-.75V12a.75.75 0 0 0-.75-.75H12ZM12 13.25a.75.75 0 0 0-.75.75v.01c0 .414.336.75.75.75h.01a.75.75 0 0 0 .75-.75V14a.75.75 0 0 0-.75-.75H12ZM13.25 12a.75.75 0 0 1 .75-.75h.01a.75.75 0 0 1 .75.75v.01a.75.75 0 0 1-.75.75H14a.75.75 0 0 1-.75-.75V12ZM11.25 10.005c0-.417.338-.755.755-.755h2a.755.755 0 1 1 0 1.51h-2a.755.755 0 0 1-.755-.755ZM6.005 11.25a.755.755 0 1 0 0 1.51h4a.755.755 0 1 0 0-1.51h-4Z" />
                                <path fillRule="evenodd" d="M5.75 2a.75.75 0 0 1 .75.75V4h7V2.75a.75.75 0 0 1 1.5 0V4h.25A2.75 2.75 0 0 1 18 6.75v8.5A2.75 2.75 0 0 1 15.25 18H4.75A2.75 2.75 0 0 1 2 15.25v-8.5A2.75 2.75 0 0 1 4.75 4H5V2.75A.75.75 0 0 1 5.75 2Zm-1 5.5c-.69 0-1.25.56-1.25 1.25v6.5c0 .69.56 1.25 1.25 1.25h10.5c.69 0 1.25-.56 1.25-1.25v-6.5c0-.69-.56-1.25-1.25-1.25H4.75Z" clipRule="evenodd" />
                            </svg>Schedule a Call</button>

                        </div>

                    </div>
                </div>


            </div>



        </section>
    );


}

export default AboutMe;