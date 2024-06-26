import React from "react";


const RulesPostitCard = ({ userstory }) => {

    return (
        <>

            <div className="rounded-lg shadow-md bg-white p-4 flex flex-col gap-2">
                <h3 className="text-lg font-medium text-gray-900">User Story:</h3>
                <p className="text-base text-gray-700">{userstory}</p>


            </div>


        </>

    )


}
export default RulesPostitCard;