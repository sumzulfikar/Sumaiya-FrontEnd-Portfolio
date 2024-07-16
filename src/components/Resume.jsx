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
    return (<button className="space-x-1.5 p-6 py-2 px-5 bg-gray-900 text-white rounded mx-10" onClick={onBtnClick}>Resume</button>);





}

export default Resume;