import React, { useState } from 'react';
import { Link } from 'react-router-dom';


const Navbar = () => {
    // const [activeLink, setActiveLink] = useState('home');

    // const handleLinkClick = (link) => {
    //     setActiveLink(link);
    // };

    return (
        <div className="flex ">



            <Link to="/" className="bg-gray-900 text-stone-50 rounded-md px-3 py-2 text-sm sm:text-xs font-medium " aria-current="page" >Home</Link>

            <Link to="/aboutme" className="text-gray-800 hover:bg-gray-700 hover:text-stone-50 rounded-md px-3 py-2 text-sm font-medium">About me</Link>

            <Link to="/myskills" className="text-gray-800 hover:bg-gray-700 hover:text-stone-50 rounded-md px-3 py-2 text-sm font-medium">Tech Stack</Link>

            <Link to="/myprojects" className="text-gray-800 hover:bg-gray-700 hover:text-stone-50 rounded-md px-3 py-2 text-sm font-medium">Projects</Link>

            {/* <Link to="/myresume" className="text-gray-300 hover:bg-gray-700 hover:text-stone-50 rounded-md px-3 py-2 text-sm font-medium">Resume</Link> 

                <Link to="/contactme" className="text-gray-300 hover:bg-gray-700 hover:text-stone-50 rounded-md px-3 py-2 text-sm font-medium" >Contact me</Link>*/}





        </div>



    );
};

export default Navbar;