import React from "react";

interface StepListingProps {
  title: string;
  listItems: string[];
}

export const StepListing: React.FC<StepListingProps> = ({
  title,
  listItems,
}) => {
  return (
    <div className="flex flex-col w-1/2 justify-center">
      <div className="text-PRIMARY font-medium text-lg m-1">{title}</div>
      <ul className="text-gray-500 font-normal text-sm list-disc">
        {listItems?.map((listItem) => (
          <li>{listItem}</li>
        ))}
      </ul>
    </div>
  );
};
