import React from "react";


export const FeatureCard = (props) => {
  const { feature } = props;
  return (
    <div className="w-[306px] shadow-md font-workSans bg-white text-base p-[25px] mx-4 rounded-lg">
      {feature.icon}
      <div className="text-[18px] text-[#1746a2] pt-3">
        {feature.head}
      </div>
      <div className="text-[#3d3d39] mt-3">
        {feature.body}
      </div>
    </div>
  );
};
