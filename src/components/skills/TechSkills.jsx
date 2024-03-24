import data from "./techstack.json"
import { useEffect, useState } from "react";
import TechCard from "./TechCard"
const TechSkills = () => {
    const [myskills, setMySkill] = useState([]);

    useEffect(() => {
        setMySkill(data.myskills);
    }, []);

    return (

        <section className="bg-white  p-10 mx-1 md:mx-10 ">
            <div className="container mx-auto px-[12px] md:px-24 xl:px-12 max-w-[1300px]">
                <h1 className="text-center text-3xl  font-bold py-2">My Skills</h1>

            </div>
            <section className="mx-auto max-w-screen-lg flex justify-center mt-4 mb-8">
                <div className="grid gap-4 xl:grid-cols-5 md:gap-8"> {myskills.map((skill) => (
                    <TechCard key={skill.id} data={skill} />
                ))
                }</div></section>
        </section>
    );
}

export default TechSkills;

