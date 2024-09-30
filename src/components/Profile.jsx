import React from "react";
import Pic from "../profilepic/my-pic.png"
// import { useState } from "react";
// import { Document, Page } from 'react-pdf';
// import MyResume from '../resume/SZulfikar_CV_FrontEnd_Dev_latest.pdf';


const Profile = () => {
  const openGithub = () => {
    const gitUrl = "https://github.com/sumzulfikar";
    window.open(gitUrl, "_blank");
  }
  const openLinkedin = () => {
    const liUrl = "https://www.linkedin.com/in/sumaiya-zulfikar/";
    window.open(liUrl, "_blank");
  }

  return (
    <>
      <div className=" flex flex-col rounded-xl bg-clip-border text-gray-700 shadow-md  md:basis-full">
        <div className=" flex justify-center">
          <img src={Pic} alt="profile-picture" className="m-4 rounded-full  h-20  lg:h-40" />
        </div>
        <div className="p-6 text-center">
          <h4 className="mb-2 block  text-2xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
            Sumaiya Zulfikar
          </h4>
          <p className="block bg-gradient-to-tr from-pink-600 to-pink-400 bg-clip-text text-base font-medium leading-relaxed text-transparent antialiased">
            Front End Developer
          </p>
          <button className="px-5 py-2 bg-gray-900 text-white rounded-full" onClick={openGithub}>Github</button>
          <button className="px-4 py-2 bg-gray-900 text-white rounded-full mx-5" onClick={openLinkedin}>Linkedin</button>
        </div>
      </div>
    </>




  );


}
export default Profile;
