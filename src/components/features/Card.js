import React from "react";


const Card = ({ item: { title, des, icon } }) => {
  return (
    <div className="main-features-card">
      <div className=" overflow-y-hidden">
        <div className="flex h-full flex-col gap-10 ">
          <div className="w-10 h-8 flex flex-col justify-between">
            {icon ? (
              <span className="text-5xl text-designColor">{icon}</span>
            ) : (
              <>
                <span className="w-full h-[2px] rounded-lg bg-designColor inline-flex"></span>
                <span className="w-full h-[2px] rounded-lg bg-designColor inline-flex"></span>
                <span className="w-full h-[2px] rounded-lg bg-designColor inline-flex"></span>
                <span className="w-full h-[2px] rounded-lg bg-designColor inline-flex"></span>
              </>
            )}
          </div>
          <div className="flex flex-col gap-6">
            <p className="base">{des}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
