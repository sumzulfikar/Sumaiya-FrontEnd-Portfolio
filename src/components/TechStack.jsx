import React from "react";
import htmlDark from "/assets/techstack/dark/html5-Dark.png";
import cssDark  from "/assets/techstack/dark/css-Dark.png";
import jsDark from "/assets/techstack/dark/js-Dark.png";
import nodeDark from "/assets/techstack/dark/nodejs-Dark.png";
import twDark from "/assets/techstack/dark/tailwind-Dark.png";
import bootstrapDark from "/assets/techstack/dark/bootstrap-Dark.png";
import jqueryDark from "/assets/techstack/dark/jqueryDark.png"
import reactDark from "/assets/techstack/dark/reactjsDark.png"

const TechStack=()=>{
return(


    <section className="bg-white  py-24 px-4 lg:px-16"> 
    <div className="container mx-auto px-[12px] md:px-24 xl:px-12 max-w-[1300px] nanum2">
        <h1 className="text-center text-5xl pb-12">Tech Stack</h1>
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-x-4 gap-y-28 lg:gap-y-16">
            <div className="relative group h-48 flex   flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
                <a href="#" className="block">
                    <div className="h-28">
                        <div
                            className="absolute -top-20 lg:top-[-10%] left-[5%] z-40  group-hover:top-[-40%] group-hover:opacity-[0.9]   duration-300 w-[90%] h-48 rounded-xl justify-items-center align-middle">
                            <img src={htmlDark} className="w-36 h-36  mt-6 m-auto" alt="HTML 5 logo" title="HTML 5 logo" loading="lazy" />
                        </div>
                    </div>
                    <div className="p-6   z-10 w-full   ">
                        <p
                            className="mb-2 inline-block text-tg text-center w-full  text-xl  font-sans  font-semibold leading-snug tracking-normal   antialiased">
                            HTML-5
                        </p>
                    </div>
                </a>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-x-4 gap-y-28 lg:gap-y-16">
            <div className="relative group h-48 flex   flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
                <a href="#" className="block">
                    <div className="h-28">
                        <div
                            className="absolute -top-20 lg:top-[-10%] left-[5%] z-40  group-hover:top-[-40%] group-hover:opacity-[0.9]   duration-300 w-[90%] h-48 rounded-xl justify-items-center align-middle">
                            <img src={cssDark} className="w-36 h-36  mt-6 m-auto" alt="CSS 3 logo" title="CSS 3 logo" loading="lazy" />
                        </div>
                    </div>
                    <div className="p-6   z-10 w-full   ">
                        <p
                            className="mb-2 inline-block text-tg text-center w-full  text-xl  font-sans  font-semibold leading-snug tracking-normal   antialiased">
                            CSS-3
                        </p>
                    </div>
                </a>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-x-4 gap-y-28 lg:gap-y-16">
            <div className="relative group h-48 flex   flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
                <a href="#" className="block">
                    <div className="h-28">
                        <div
                            className="absolute -top-20 lg:top-[-10%] left-[5%] z-40  group-hover:top-[-40%] group-hover:opacity-[0.9]   duration-300 w-[90%] h-48 rounded-xl justify-items-center align-middle">
                            <img src={jsDark} className="w-36 h-36  mt-6 m-auto" alt=" Javascript logo" title="javascript logo" loading="lazy" />
                        </div>
                    </div>
                    <div className="p-6   z-10 w-full   ">
                        <p
                            className="mb-2 inline-block text-tg text-center w-full  text-xl  font-sans  font-semibold leading-snug tracking-normal antialiased">
                            Vanilla Javascript
                        </p>
                    </div>
                </a>
            </div>

        

        </div>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-x-4 gap-y-28 lg:gap-y-16">
            <div className="relative group h-48 flex   flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
                <a href="#" className="block">
                    <div className="h-28">
                        <div
                            className="absolute -top-20 lg:top-[-10%] left-[5%] z-40  group-hover:top-[-40%] group-hover:opacity-[0.9]   duration-300 w-[90%] h-48 rounded-xl justify-items-center align-middle">
                            <img src={nodeDark} className="w-36 h-36  mt-6 m-auto" alt="Node logo" title="Node logo" loading="lazy" />
                        </div>
                    </div>
                    <div className="p-6   z-10 w-full   ">
                        <p
                            className="mb-2 inline-block text-tg text-center w-full  text-xl  font-sans  font-semibold leading-snug tracking-normal   antialiased">
                            Node-JS
                        </p>
                    </div>
                </a>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-x-4 gap-y-28 lg:gap-y-16">
            <div className="relative group h-48 flex   flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
                <a href="#" className="block">
                    <div className="h-28">
                        <div
                            className="absolute -top-20 lg:top-[-10%] left-[5%] z-40  group-hover:top-[-40%] group-hover:opacity-[0.9]   duration-300 w-[90%] h-48 rounded-xl justify-items-center align-middle">
                            <img src={jsDark} className="w-36 h-36  mt-6 m-auto" alt=" Javascript logo" title="javascript logo" loading="lazy" />
                        </div>
                    </div>
                    <div className="p-6   z-10 w-full   ">
                        <p
                            className="mb-2 inline-block text-tg text-center w-full  text-xl  font-sans  font-semibold leading-snug tracking-normal antialiased">
                            Vanilla Javascript
                        </p>
                    </div>
                </a>
            </div>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-x-4 gap-y-28 lg:gap-y-16">
            <div className="relative group h-48 flex   flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
                <a href="#" className="block">
                    <div className="h-28">
                        <div
                            className="absolute -top-20 lg:top-[-10%] left-[5%] z-40  group-hover:top-[-40%] group-hover:opacity-[0.9]   duration-300 w-[90%] h-48 rounded-xl justify-items-center align-middle">
                            <img src={twDark} className="w-36 h-36  mt-6 m-auto" alt="Tailwind css logo" title="Tailwind css logo" loading="lazy" />
                        </div>
                    </div>
                    <div className="p-6   z-10 w-full   ">
                        <p
                            className="mb-2 inline-block text-tg text-center w-full  text-xl  font-sans  font-semibold leading-snug tracking-normal antialiased">
                            Tailwind CSS
                        </p>
                    </div>
                </a>
            </div>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-x-4 gap-y-28 lg:gap-y-16">
            <div className="relative group h-48 flex   flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
                <a href="#" className="block">
                    <div className="h-28">
                        <div
                            className="absolute -top-20 lg:top-[-10%] left-[5%] z-40  group-hover:top-[-40%] group-hover:opacity-[0.9]   duration-300 w-[90%] h-48 rounded-xl justify-items-center align-middle">
                            <img src={bootstrapDark} className="w-36 h-36  mt-6 m-auto" alt="bootstrap logo" title="bootstrap logo" loading="lazy" />
                        </div>
                    </div>
                    <div className="p-6   z-10 w-full   ">
                        <p
                            className="mb-2 inline-block text-tg text-center w-full  text-xl  font-sans  font-semibold leading-snug tracking-normal antialiased">
                            Bootstrap
                        </p>
                    </div>
                </a>
            </div>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-x-4 gap-y-28 lg:gap-y-16">
            <div className="relative group h-48 flex   flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
                <a href="#" className="block">
                    <div className="h-28">
                        <div
                            className="absolute -top-20 lg:top-[-10%] left-[5%] z-40  group-hover:top-[-40%] group-hover:opacity-[0.9]   duration-300 w-[90%] h-48 rounded-xl justify-items-center align-middle">
                            <img src={jqueryDark} className="w-36 h-36  mt-6 m-auto" alt="jquery logo" title="jquery logo" loading="lazy" />
                        </div>
                    </div>
                    <div className="p-6   z-10 w-full   ">
                        <p
                            className="mb-2 inline-block text-tg text-center w-full  text-xl  font-sans  font-semibold leading-snug tracking-normal antialiased">
                            Jquery
                        </p>
                    </div>
                </a>
            </div>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-x-4 gap-y-28 lg:gap-y-16">
            <div className="relative group h-48 flex   flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
                <a href="#" className="block">
                    <div className="h-28">
                        <div
                            className="absolute -top-20 lg:top-[-10%] left-[5%] z-40  group-hover:top-[-40%] group-hover:opacity-[0.9]   duration-300 w-[90%] h-48 rounded-xl justify-items-center align-middle">
                            <img src={reactDark} className="w-36 h-36  mt-6 m-auto" alt="react logo" title="react logo" loading="lazy" />
                        </div>
                    </div>
                    <div className="p-6   z-10 w-full   ">
                        <p
                            className="mb-2 inline-block text-tg text-center w-full  text-xl  font-sans  font-semibold leading-snug tracking-normal antialiased">
                            React
                        </p>
                    </div>
                </a>
            </div>
            </div>
        </div>
        </div>
    </div>
    </section>
);
}

export default TechStack;

