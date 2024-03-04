import React from "react";
import assets from "../assets/my-pic.png"

const Profile=()=>{
    return (
      
    <div className="relative flex w-96 flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
            <div class="relative mx-4 mt-4 h-80 overflow-hidden rounded-xl bg-white bg-clip-border text-gray-700 shadow-lg">
            <img src={assets} alt="profile-picture" />
            </div>
    <div className="p-6 text-center">
            <h4 class="mb-2 block font-sans text-2xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
                Sumaiya Zulfikar
            </h4>
    <p className="block bg-gradient-to-tr from-pink-600 to-pink-400 bg-clip-text font-sans text-base font-medium leading-relaxed text-transparent antialiased">
      Front End Developer
    </p>
  </div>
  
  </div>
  

    );


}
export default Profile;
