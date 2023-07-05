import React, { useState } from 'react';
import Education from './Education';
import Skills from './Skills';

const Resume = () => {
   const [educationData, setEducationData] = useState(true);
   const [skillData, setSkillData] = useState(false);
  return (
    <section id="resume" className="w-full py-20 border-b-[1px] border-b-black">
      <div className="flex justify-center items-center text-center">
      </div>
      <div>
        <ul className="w-full grid grid-cols-1 md:grid-cols-2">
          <li
            onClick={() =>
              setEducationData(true) &
              setSkillData(false) 
            }
            className={`${
              educationData
                ? "border-designColor rounded-lg"
                : "border-transparent"
            } resumeLi`}
          >
            Education & Experience
          </li>
          <li
            onClick={() =>
              setEducationData(false) &
              setSkillData(true)  
            }
            className={`${
              skillData ? "border-designColor rounded-lg" : "border-transparent"
            } resumeLi`}
          >
            Professional Skills
          </li>
          
        </ul>
      </div>
      {educationData && <Education />}
      {skillData && <Skills />}
 
    </section>
  );
}

export default Resume