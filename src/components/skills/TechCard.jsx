import React from "react";




const TechCard = (props) => {
    const { id, src, alt } = props.data;

    return (
        < >

            <div className=" w-full p-2">
                <div key={id} className="relative group flex flex-col rounded-xl  bg-white bg-clip-border text-gray-700 shadow-md ">
                    <a href="#" className="block" >
                        <div className="">
                            <p className="mb-2   text-center text-sm font-semibold">
                                {alt}
                            </p>
                            {/*  z-5 w-full p-2 */}
                        </div>
                        <div className="block">
                            <div className=" justify-end">
                                <img src={src} className="m-auto object-scale-down  h-16 w-16 hover:animate-bounce" alt=`${alt} logo` title={alt} loading="lazy" cursor-default />
                            </div>
                        </div>

                    </a>
                </div>
            </div>
        </>

    )


}
export default TechCard;