import data from "./techstack.json"
import { useEffect, useState } from "react";
import TechCard from "./TechCard"
const TechSkills = () => {
    const [myskills, setMySkill] = useState([]);

    useEffect(() => {
        setMySkill(data.myskills);
    }, []);

    return (

        <section className=" mx-1 p-5" >

            <h1 className="text-center text-3xl  font-bold py-2">My Skills</h1>



            <div className=" grid gap-4  lg:grid-cols-5 md:grid-cols-5  bg-gray-50 sm:grid-cols-3"> {myskills.map((skill) => (
                <TechCard key={skill.id} data={skill} />
            ))
            }</div></section>

    );
}

export default TechSkills;

