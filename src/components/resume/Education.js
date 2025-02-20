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
      <div>
        <div className="mt-6 lgl:mt-14 w-full h-fit m-auto border-l-[6px] border-l-black border-opacity-30 flex items-center justify-center flex-col gap-10">
          <h2 className="text-3xl md:text-4xl font-bold">Education Quality</h2>
          <ResumeCard
            title="Bachelor's degree , Telecommunications and Electronics Engineering"
            subTitle="Tishreen University (2015 - 2021)"
            result="Syria"
          />
          <h2 className="text-3xl md:text-4xl font-bold">Job Experience</h2>
          <ResumeCard
            title="Polkadot Developer & Front-End Developer"
            subTitle="May 2024 - Present"
            result="Dubai, United Arab Emirates · On-site"
            des="Developing and maintaining blockchain solutions using Polkadot.

Building interactive and user-friendly front-end interfaces with React and TypeScript.

Creating, managing, and integrating NFTs and tokens on custom blockchains.

Collaborating with teams to deliver seamless Web3 experiences."
          />
          <ResumeCard
            title="Frontend Web developer"
            subTitle="Divcodes - (2021 - 31/01/2024)"
            result="Lebanon"
            des="creating user-friendly interfaces and exceptional user experiences. I have experience working with modern build tools like Vite and Nx monorepo. I am proficient in integrating applications with backend systems using Restful API and GraphQL. I have also worked with real-time technologies such as Socket.io, Firebase, and Google Maps services. Additionally, I have expertise in payment gateway integration. My focus is on delivering intuitive interfaces and seamless user experiences."
          />

          <ResumeCard
            title="Frontend Web developer"
            subTitle="FREELANCER - ( 2020 - 2021 )"
            result="Syria"
            des="Designed responsive landing pages using HTML5 and CSS. Effective collaboration with clients and team members
            was a key element of my success"
          />
        </div>
      </div>
    </motion.div>
  );
};

export default Education;
