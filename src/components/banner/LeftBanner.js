import React from "react";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import Media from "./Media";
import { useInView } from "react-intersection-observer";

const LeftBanner = () => {
  const [text] = useTypewriter({
    words: ["Professional Coder.", "React Developer."],
    loop: true,
    typeSpeed: 20,
    deleteSpeed: 10,
    delaySpeed: 2000,
  });
  const { ref: h4Ref, inView: h4View } = useInView();
  const { ref: h1Ref, inView: h1View } = useInView();
  const { ref: textRef, inView: textView } = useInView();
  const { ref: pRef, inView: pView } = useInView();

  return (
    <div className="w-full lgl:w-1/2 flex flex-col gap-20">
      <div className="flex flex-col gap-5">
        <h4
          ref={h4Ref}
          className={`text-lg font-normal relative ${
            h4View ? " left-animation" : "opacity-0"
          }`}
        >
          WELCOME TO MY WORLD
        </h4>
        <h1
          ref={h1Ref}
          className={`text-6xl font-bold text-white relative ${
            h1View ? " left-animation" : "opacity-0"
          }`}
        >
          Hi, I'm{" "}
          <span className="text-designColor capitalize">Mahmood Sino</span>
        </h1>
        <h2
          ref={textRef}
          className={`text-4xl font-bold text-white relative  ${
            textView ? " left-animation" : "opacity-0"
          } `}
        >
          a <span>{text}</span>
          <Cursor
            cursorBlinking="false"
            cursorStyle="|"
            cursorColor="#ff014f"
          />
        </h2>
        <p
          ref={pRef}
          className={`text-base font-bodyFont leading-6 tracking-wide relative ${
            pView ? " left-animation" : "opacity-0"
          } `}
        >
          I specialize in creating user-friendly interfaces with a passion for
          crafting exceptional user experiences, collaborating with
          cross-functional teams, and staying up-to-date with the latest React
          trends. Let's bring your ideas to life and create something amazing
          together!
        </p>
      </div>
      <Media />
    </div>
  );
};

export default LeftBanner;
