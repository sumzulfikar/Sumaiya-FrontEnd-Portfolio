import React from "react";
import Pic from "../profilepic/my-pic.png";
import { SocialIcon } from 'react-social-icons/component';
import 'react-social-icons/linkedin';
import 'react-social-icons/email';
import 'react-social-icons/github';
import 'react-social-icons/x';
import 'react-social-icons/mailto';

// import { useState } from "react";
// import { Document, Page } from 'react-pdf';
// import MyResume from '../resume/SZulfikar_CV_FrontEnd_Dev_latest.pdf';


const Profile = () => {

  return (
    <>
      <div class=" flex flex-row sm:flex-col rounded-xl bg-clip-border text-gray-900 shadow-md md:basis-full">
        <div class="flex justify-center">
          <img src={Pic} alt="My smiling picture" label="My profile picture" class="m-4 rounded-full md:h-30 h-36" />
        </div>

        <div class="p-4 sm:p-2 gap-2 text-center flex flex-col">
          <h2 class="text-2xl font-semibold leading-snug  text-blue-gray-900 antialiased">
            Sumaiya Zulfikar
          </h2>
          <h3 class="text-gray-900 text-base font-medium leading-relaxed antialiased">
            Front End Developer
          </h3>

          <div class="flex flex-row gap-2 justify-center mt-4">

            <SocialIcon target="_blank" url="https://www.linkedin.com/in/sumaiya-zulfikar/" label="Linkedin link" bgColor="gray-500" style={{ height: 25, width: 25 }} />
            <SocialIcon target="_blank" url="https://github.com/sumzulfikar" bgColor="gray-500" label="gitHub link" style={{ height: 25, width: 25 }} />
            <SocialIcon target="_blank" url="https://x.com/Sumaiyaz_here" label="Twitter/x.com link" bgColor="gray-500" style={{ height: 25, width: 25 }} />
            <SocialIcon target="_blank" url="mailto:sumaiyaz.here@gmail.com" label="Email address" bgColor="gray-500" style={{ height: 25, width: 25 }} />
          </div>
        </div>
      </div>

    </>




  );


}
export default Profile;
