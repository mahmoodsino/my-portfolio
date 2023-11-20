import React from "react";
import { FaLinkedinIn, FaReact } from "react-icons/fa";
import {
  SiGitlab,
  SiGmail,
  SiNextdotjs,
  SiNx,
  SiTailwindcss,
  SiVite,
} from "react-icons/si";
import { useInView } from "react-intersection-observer";
const Media = () => {
  const { ref: findRef, inView: findView } = useInView();

  return (
    <div className="flex flex-col gap-6 justify-between">
      <div
        ref={findRef}
        className={`relative ${findView ? "left-animation" : "opacity-0"}`}
      >
        <h2 className={`text-base uppercase font-titleFont mb-4 `}>
          Find me in
        </h2>
        <div className={`flex gap-4 `}>
          <a
            href="https://gitlab.com/ms.divcodes"
            target="_blank"
            className="bannerIcon"
          >
            <SiGitlab />
          </a>
          <a
            href="https://www.linkedin.com/in/mahmood-sino-51810a230/"
            target="_blank"
            className="bannerIcon"
          >
            <FaLinkedinIn />
          </a>
          <a
            href="mailto:mahmoodsino40@gmail.com"
            target="_blank"
            className="bannerIcon"
          >
            <SiGmail />
          </a>
        </div>
      </div>
      <div>
        <h2 className="text-base uppercase font-titleFont mb-4">
          BEST SKILL ON
        </h2>
        <div className="flex gap-4">
          <span className="bannerIcon">
            <FaReact />
          </span>
          <span className="bannerIcon">
            <SiNextdotjs />
          </span>
          <span className="bannerIcon">
            <SiTailwindcss />
          </span>
          <span className="bannerIcon">
            <SiNx />
          </span>
          <span className="bannerIcon">
            <SiVite />
          </span>
        </div>
      </div>
    </div>
  );
};

export default Media;
