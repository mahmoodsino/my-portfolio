import React from "react";
import { FaLinkedinIn } from "react-icons/fa";
import { SiGitlab, SiGmail } from "react-icons/si";
import { useInView } from "react-intersection-observer";

const ContactLeft = () => {
  const { ref, inView } = useInView();

  return (
    <div
      ref={ref}
      className={`main-contact ${
        inView ? "left-animation relative" : "opacity-0"
      }`}
    >
      <div className="flex flex-col gap-4">
        <h3 className="text-3xl font-bold text-white">Mahmood Sino</h3>
        <p className="text-lg font-normal text-gray-400">
          Frontend Web developer
        </p>
        <p className="text-base text-gray-400 tracking-wide">
          you can contact me at the links below. I will get back to you as soon
          as I can.
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
