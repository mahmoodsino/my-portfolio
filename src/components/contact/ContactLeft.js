import React from "react";
import { FaLinkedinIn } from "react-icons/fa";
import { SiGitlab, SiGmail } from "react-icons/si";

const ContactLeft = () => {
  return (
    <div className="w-full lgl:w-[35%] h-full bg-gradient-to-r from-[#1e2024] to-[#23272b] p-4 lgl:p-8 rounded-lg shadow-shadowOne flex flex-col gap-8 justify-center">
      <div className="flex flex-col gap-4">
        <h3 className="text-3xl font-bold text-white">Mahmood Sino</h3>
        <p className="text-lg font-normal text-gray-400">
          Frontend Web developer
        </p>
        <p className="text-base text-gray-400 tracking-wide">
          you can contact me at the links below. I will get
          back to you as soon as I can.
        </p>
      </div>
      <div className="flex gap-4">
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
  );
};

export default ContactLeft;
