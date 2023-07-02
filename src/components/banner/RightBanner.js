import React from 'react'
import { bannerImg } from "../../assets/index";

const RightBanner = () => {
  return (
    <div className="w-full lgl:w-1/2 flex justify-center items-center relative">
      <img
        className=""
        src="/bannerImg.png"
        alt="bannerImg"
      />
      {/* <img src='/profile-pic.png' /> */}
      {/* <div className="absolute bottom-0 w-[350px] h-[300px] lgl:w-[500px] lgl:h-[500px] bg-gradient-to-r from-[#303036] to-[#2e2e38] shadow-shadowOne flex justify-center items-center"></div> */}
    </div>
  );
}

export default RightBanner