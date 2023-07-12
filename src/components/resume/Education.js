import React from "react";
import { motion } from "framer-motion";
import ResumeCard from "./ResumeCard";

const Education = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="w-full"
    >
      {/* part one */}
      <div>
        {/* <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
          <h2 className="text-3xl md:text-4xl font-bold">
            Education Quality and Job Experience
          </h2>
        </div> */}
        <div className="mt-6 lgl:mt-14 w-full h-fit m-auto border-l-[6px] border-l-black border-opacity-30 flex items-center justify-center flex-col gap-10">
          <h2 className="text-3xl md:text-4xl font-bold">Education Quality</h2>
          <ResumeCard
            title="Bachelor's degree , Telecommunications and Electronics Engineering"
            subTitle="Tishreen University (2015 - 2021)"
            result="Syria"
          />
          <h2 className="text-3xl md:text-4xl font-bold">Job Experience</h2>
          <ResumeCard
            title="Frontend Web developer"
            subTitle="Divcodes - (2022 - Present)"
            result="Lebanon"
            des="I specialize in creating user-friendly interfaces and exceptional user experiences. I have experience working with modern build tools like Vite and Nx monorepo. I am proficient in integrating applications with backend systems using Restful API and GraphQL. I have also worked with real-time technologies such as Socket.io, Firebase, and Google Maps services. Additionally, I have expertise in payment gateway integration. My focus is on delivering intuitive interfaces and seamless user experiences."
          />
        </div>
      </div>
    </motion.div>
  );
};

export default Education;
