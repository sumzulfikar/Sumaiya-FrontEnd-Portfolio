import React from "react";
import cv from "/assets/resume/SZulfikar_CV_FrontEnd_Dev_latest.pdf"
const Resume = () => {
    let aLink = React.useRef(null);
    const onBtnClick = () => {
        fetch(cv).then((reponse) => {
            reponse.blob().then((blob) => {

                const fileUrl = window.URL.createObjectURL(blob);
                aLink = document.createElement("a"),
                    aLink.href = fileUrl;
                aLink.download = "SZulfikar_CV_FrontEnd_Dev_latest.pdf";
                aLink.click();
            })

        })
    }
    return (<button className=" mt-2 px-4 py-2 bg-gray-900 text-white rounded-full" onClick={onBtnClick}>Resume</button>);





}

export default Resume;