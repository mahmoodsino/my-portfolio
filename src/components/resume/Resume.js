import React, { useState } from "react";
import Education from "./Education";
import Skills from "./Skills";
import { useInView } from "react-intersection-observer";

const Resume = () => {
  const [educationData, setEducationData] = useState(true);
  const [skillData, setSkillData] = useState(false);
  const { ref: ulRef, inView: ulView } = useInView();
  const { ref, inView } = useInView();

  return (
    <section id="resume" className="w-full py-20 border-b-[1px] border-b-black">
      <div className="flex justify-center items-center text-center"></div>
      <div>
        <ul
          ref={ulRef}
          className={`w-full grid grid-cols-1 md:grid-cols-2 ${
            ulView ? "left-animation relative" : "opacity-0"
          }`}
        >
          <li
            onClick={() => setEducationData(true) & setSkillData(false)}
            className={`${
              educationData
                ? "border-designColor rounded-lg"
                : "border-transparent"
            } resumeLi`}
          >
            Education & Experience
          </li>
          <li
            onClick={() => setEducationData(false) & setSkillData(true)}
            className={`${
              skillData ? "border-designColor rounded-lg" : "border-transparent"
            } resumeLi`}
          >
            Professional Skills
          </li>
        </ul>
      </div>
      <div
        ref={ref}
        className={`${inView ? "left-animation relative" : "opacity-0"}`}
      >
        {educationData && <Education />}
        {skillData && <Skills />}
      </div>
    </section>
  );
};

export default Resume;
