import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {


    return (

        <div>
            <div className="flex space-x-4 mx-1 md:mx-10 p-2">

                <Link to="/" className="bg-gray-900 text-white rounded-md px-3 py-2 text-sm font-medium" aria-current="page" >Home</Link>
                <Link to="/aboutme" className="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium">About me</Link>
                <Link to="/myskills" className="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium">My Skills</Link>
                <Link to="/myprojects" className="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium">My Projects</Link>
                <Link to="/contactme" className="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium" >Contact me</Link>


            </div>
        </div>

    );
}

export default Navbar;


