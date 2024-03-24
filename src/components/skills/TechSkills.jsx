import data from "./techstack.json"
import { useEffect, useState } from "react";
import TechCard from "./TechCard"
const TechSkills = () => {
    const [myskills, setMySkill] = useState([]);

    useEffect(() => {
        setMySkill(data.myskills);
    }, []);

    return (

        <section className="component bg-white mx-1 md:mx-10">
            <div className="container mx-auto">
                <h1 className="text-center text-3xl  font-bold py-2">My Skills</h1>

            </div>
            <section className=" flex justify-center mt-4">
                <div className="grid gap-4 md:grid-cols-5  xs:grid-cols-2"> {myskills.map((skill) => (
                    <TechCard key={skill.id} data={skill} />
                ))
                }</div></section>
        </section>
    );
}

export default TechSkills;

