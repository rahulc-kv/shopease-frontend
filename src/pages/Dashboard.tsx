import { EmptyProfile } from "assets/icons";
import React from "react";

const SellerDashboard: React.FC = () => {
  console.log("hi");

  return (
    <div className="p-2">
      <div className="flex items-center justify-between">
        <div className="flex">
          <EmptyProfile />
          <div>
            <div className="text-black text-lg">Hello, Anna</div>
            <div className="text-[#777] text-base">Here’s what’s happening with your business today</div>
          </div>
        </div>
        <button className="bg-[#3f81e0]/50 px-8 py-2 rounded-md">
          + Add product
        </button>
      </div>
    </div>
  );
};

export default SellerDashboard;
