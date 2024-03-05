import React from "react";
import cv from "/assets/resume/SZulfikar_CV_FrontEnd_24v2.pdf"
const Resume=()=>{
    let aLink = React.useRef(null);
        const onBtnClick=()=>{
            fetch(cv).then((reponse)=>{
                reponse.blob().then((blob)=>{

                    const fileUrl=window.URL.createObjectURL(blob);
                    aLink=document.createElement("a"),
                    aLink.href=fileUrl;
                    aLink.download="SZulfikar_CV_FrontEnd_24v2.pdf";
                    aLink.click();
                })

            })
        }
return<button onClick={onBtnClick}>Download my resume</button>
    
  



}

export default Resume;