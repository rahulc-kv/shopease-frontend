import React from "react";

interface StepListingProps {
  title: string;
  listItems: string[];
  className?: string;
}

export const StepListing: React.FC<StepListingProps> = ({
  title,
  listItems,
  className = ""
}) => {
  return (
    <div className={`flex flex-col w-1/2 ${className}`}>
      <div className="text-primary font-medium text-lg m-1">{title}</div>
      <ul className="text-gray-500 font-normal text-sm list-disc">
        {listItems?.map((listItem) => (
          <li>{listItem}</li>
        ))}
      </ul>
    </div>
  );
};
