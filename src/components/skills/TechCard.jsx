import React from "react";




const TechCard = (props) => {
    const { id, src, alt } = props.data;

    return (
        < >

            <div className="p-2">
                <div key={id} className="relative group flex flex-col rounded-xl  bg-white bg-clip-border text-gray-700 shadow-md ">
                    <div className="flex">

                        <div className="inline-block">
                            <p className="p-2  text-center text-lg font-semibold">
                                {alt}
                            </p>
                            {/*  z-5 w-full p-2 */}
                        </div>

                        <div className=" justify-center">
                            <img src={src} className="m-5 object-scale-down  h-16  w-14 hover:animate-bounce" alt={`${alt} logo`} title={alt} loading="lazy" cursor-default />
                        </div>
                    </div>

                </div>
            </div>

        </>

    )


}
export default TechCard;