import React from "react";
import { motion } from "framer-motion";
import ResumeCard from "./ResumeCard";

const Education = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="w-full flex flex-col lgl:flex-row gap-10 lgl:gap-20"
    >
      {/* part one */}
      <div>
        <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
          <h2 className="text-3xl md:text-4xl font-bold">Education Quality</h2>
        </div>
        <div className="mt-6 lgl:mt-14 w-full h-[480px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="High school , Baccalaureate"
            subTitle="(2012 - 2015)"
          />
          <ResumeCard
            title="Graduated form communication and electronics engineering"
            subTitle="Tishreen University (2001 - 2005)"
          />
        </div>
      </div>
      {/* part Two */}

      <div>
        <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
          <h2 className="text-3xl md:text-4xl font-bold">Job Experience</h2>
        </div>
        <div className="mt-6 lgl:mt-14 w-full h-fit border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="Frontend Web developer"
            subTitle="Divcodes - (2022 - Present)"
            result="Lebanon"
            des="specialize in creating user-friendly interfaces."
          />
          <ResumeCard
            title="marketing business"
            subTitle="w+ comapny - (2019 - 2021)"
            result="Syria"
            des="Responsible for sales and gaining experience working with people and working
            under pressure ."
          />
          <ResumeCard
            title="security camera and cctv"
            subTitle="Freelancer - (2017 - 2020)"
            result="Syria"
            des="The Installing and knowing the malfunctions of alarm and monitoring devices, and
            dealing with caution with the smallest errors ."
          />
        </div>
      </div>
    </motion.div>
  );
};

export default Education;
