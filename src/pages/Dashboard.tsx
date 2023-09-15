import { EmptyProfile } from "assets/icons";
import { DashboardToolbar } from "components/dashboard-card";
import RevenueChart from "components/revenue-card/RevenueChart";
import React from "react";

const SellerDashboard: React.FC = () => {
  return (
    <div className="pl-64 p-10 bg-[#F8F8F8] h-screen">
      <div className="flex items-center justify-between mb-12">
        <div className="flex gap-3">
          <EmptyProfile className="w-[50px] h-[50px]" />
          <div>
            <div className="text-black text-lg">Hello, Anna</div>
            <div className="text-[#777] text-base">
              Here’s what’s happening with your business today
            </div>
          </div>
        </div>
        <button className="bg-[#3f81e0]/50 px-8 py-2 rounded-md">
          + Add product
        </button>
      </div>
      <DashboardToolbar />
      <div className="w-full h-[550px] mt-10 bg-white shadow-[0px 4px 4px rgba(227, 227, 227, 0.25)">
        <RevenueChart />
      </div>
    </div>
  );
};

export default SellerDashboard;
