import React from "react";

const Navbar=()=>{
 return (<div>
    <div class="flex space-x-4">
        <a href="#profile" className="bg-gray-900 text-white rounded-md px-3 py-2 text-sm font-medium" aria-current="page">About me</a>
        <a href="#contact" className="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium">Contact me</a>
        <a href="#projects"className="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium">My Projects</a>
       
    </div>
</div>

 );
}

export default Navbar;


