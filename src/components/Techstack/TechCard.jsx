import React from "react";


const TechCard = (props) => {
    const { id, src, alt } = props.data;

    return (
        < >

            <div className=" w-full p-2">
                <div key={id} className="relative group flex flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md w-full">
                    <a href="#" className="block" >
                        <div className="p-6  z-5 ">
                            <p className="mb-2   text-left text-sm">
                                {alt}
                            </p>
                        </div>
                        <div className="block">
                            <div className=" justify-end">
                                <img src={src} className="m-auto object-scale-down h-16 w-16" alt={alt} title={alt} loading="lazy" />
                            </div>
                        </div>

                    </a>
                </div>
            </div>
        </>

    )


}
export default TechCard;