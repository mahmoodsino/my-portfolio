import React, { useState } from "react";
import { FaReact } from "react-icons/fa";
import {
  SiCss3,
  SiFirebase,
  SiGraphql,
  SiNextdotjs,
  SiNx,
  SiTailwindcss,
  SiTypescript,
  SiVite,
} from "react-icons/si";
import { PhotoSlider } from "react-photo-view";
import "react-photo-view/dist/react-photo-view.css";

const ProjectsCard = ({
  title,
  des,
  isNext,
  isNx,
  isReact,
  isGraph,
  isVite,
  isTailwind,
  isFire,
  isCss,
  isOnline,
  grid,
  images,
  onlineURL
}) => {
  const [visible, setVisible] = useState(false);
  const [index, setIndex] = useState(0);

  return (
    <div className="w-full p-4 xl:px-12 h-auto xl:py-10 rounded-lg shadow-shadowOne flex flex-col bg-gradient-to-r from-bodyColor to-[#202327] group hover:bg-gradient-to-b hover:from-gray-900 hover:gray-900 transition-colors duration-1000">
      <div className="w-full h-[200px] overflow-hidden rounded-lg">
        <h3 className="uppercase text-designColor font-semibold text-2xl">
          {title}
        </h3>
        <p className="text-sm tracking-wide mt-3 hover:text-gray-100 duration-300">
          {des}
        </p>
        {/* <img
          className="w-full h-60 object-cover group-hover:scale-110 duration-300 cursor-pointer"
          src={src}
          alt="src"
        /> */}
      </div>
      <div className="flex flex-wrap mt-3 gap-2">
        <span className="text-lg w-10 h-10 rounded-full bg-black inline-flex justify-center items-center text-gray-400 hover:text-designColor duration-300 cursor-pointer">
          <SiTypescript />
        </span>
        {isGraph && (
          <span className="text-lg w-10 h-10 rounded-full bg-black inline-flex justify-center items-center text-gray-400 hover:text-designColor duration-300 cursor-pointer">
            <SiGraphql />
          </span>
        )}
        {isNext && (
          <span className="text-lg w-10 h-10 rounded-full bg-black inline-flex justify-center items-center text-gray-400 hover:text-designColor duration-300 cursor-pointer">
            <SiNextdotjs />
          </span>
        )}
        {isNx && (
          <span className="text-lg w-10 h-10 rounded-full bg-black inline-flex justify-center items-center text-gray-400 hover:text-designColor duration-300 cursor-pointer">
            <SiNx />
          </span>
        )}
        {isVite && (
          <span className="text-lg w-10 h-10 rounded-full bg-black inline-flex justify-center items-center text-gray-400 hover:text-designColor duration-300 cursor-pointer">
            <SiVite />
          </span>
        )}
        {isTailwind && (
          <span className="text-lg w-10 h-10 rounded-full bg-black inline-flex justify-center items-center text-gray-400 hover:text-designColor duration-300 cursor-pointer">
            <SiTailwindcss />
          </span>
        )}
        {isFire && (
          <span className="text-lg w-10 h-10 rounded-full bg-black inline-flex justify-center items-center text-gray-400 hover:text-designColor duration-300 cursor-pointer">
            <SiFirebase />
          </span>
        )}
        {isCss && (
          <span className="text-lg w-10 h-10 rounded-full bg-black inline-flex justify-center items-center text-gray-400 hover:text-designColor duration-300 cursor-pointer">
            <SiCss3 />
          </span>
        )}
        {isReact && (
          <span className="text-lg w-10 h-10 rounded-full bg-black inline-flex justify-center items-center text-gray-400 hover:text-designColor duration-300 cursor-pointer">
            <FaReact />
          </span>
        )}
      </div>
      <div className="w-full mt-5 flex flex-col  gap-6">
        <div>
          <div className={`grid !grid-cols-${grid} w-full gap-y-2 gap-x-2`}>
            {isOnline && (
              <a
                href={onlineURL}
                target="_blank"
                className="w-full text-center py-2 rounded-md border font-medium hover:border-designColor hover:shadow-shadowOne hover:bg-designColor transition-all duration-300"
              >
                Online
              </a>
            )}
            {images?.length > 0 && (
              <div className="w-full">
                <button
                  className="py-2 bg-designColor w-full hover:shadow-shadowOne rounded-md transition-all duration-300 font-medium"
                  onClick={() => setVisible(true)}
                  primary
                >
                  Screenshots
                </button>
                <PhotoSlider
                  images={images.map((item) => ({
                    src: item,
                    key: item,
                  }))}
                  visible={visible}
                  onClose={() => setVisible(false)}
                  index={index}
                  onIndexChange={setIndex}
                />
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectsCard;
