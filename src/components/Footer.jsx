import React from "react";

const year = new Date();
const Footer = () => {

    return <h6 className="text-center font-normal">{year.getFullYear()} © Sumaiya Zulfikar. All Rights Reserved.</h6>

}
export default Footer;
