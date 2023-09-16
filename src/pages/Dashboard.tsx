import React from "react";

import { DashboardToolbar } from "components/dashboard-card";
import RevenueChart from "components/revenue-card/RevenueChart";

import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

export const doughnutData = {
  labels: [],
  datasets: [
    {
      label: "# of Votes",
      data: [12, 19, 3, 5, 2, 3],
      backgroundColor: [
        "rgb(255, 99, 132)",
        "rgb(54, 162, 235)",
        "rgb(255, 206, 86)",
        "rgb(75, 192, 192)",
        "rgb(153, 102, 255)",
        "rgb(255, 159, 64)",
      ],
      borderColor: [
        "rgba(255, 99, 132, 1)",
        "rgba(54, 162, 235, 1)",
        "rgba(255, 206, 86, 1)",
        "rgba(75, 192, 192, 1)",
        "rgba(153, 102, 255, 1)",
        "rgba(255, 159, 64, 1)",
      ],
      borderWidth: 1,
    },
  ],
};

const items = [
  {
    color: "bg-red-500",
    name: "Groceries",
  },
  {
    color: "bg-blue-500",
    name: "Stationaries",
  },
  {
    color: "bg-yellow-500",
    name: "Cosmetics",
  },
  {
    color: "bg-green-500",
    name: "Essentials",
  },
];

const bestSellers = [
  {
    name: "Colgate",
    amount: "31,465",
    sales: 899,
    stock: "200",
    rating: "4.5",
  },
  {
    name: "Dove",
    amount: "66,495",
    sales: 1209,
    stock: "200",
    rating: "4.5",
  },
  {
    name: "Yonex",
    amount: "1,34,400",
    sales: 84,
    stock: "200",
    rating: "4.5",
  },
];

const renderBestSeller = (item: any) => {
  return (
    <div className="flex gap-8">
      <div className="w-[150px]">{item.name}</div>
      <div className="w-20">₹{item.amount}</div>
      <div className="w-20">{item.sales}</div>
      <div className="w-20">{item.stock}</div>
      <div className="w-20">{item.rating}</div>
    </div>
  );
};

const renderPieChartItem = (item: any) => {
  return (
    <div className="flex gap-4 items-center">
      <div className={`w-2 h-2 rounded-full ${item.color}`}></div>
      <div>{item.name}</div>
    </div>
  );
};

const SellerDashboard: React.FC = () => {
  return (
    <div className="p-10 bg-[#F8F8F8]">
      <div className="flex items-center justify-between mb-12">
        <div className="flex gap-3">
          <div>
            <div className="text-black text-lg">Hello, Anna</div>
            <div className="text-[#777] text-base">
              Here’s what’s happening with your business today
            </div>
          </div>
        </div>
      </div>
      <DashboardToolbar />
      <div className="w-full h-[550px] mt-10 px-10 bg-white shadow-[0px 4px 4px rgba(227, 227, 227, 0.25) ">
        <RevenueChart />
      </div>
      <div className="mt-10 flex gap-8">
        <div className="p-10 bg-white shadow-[0px 4px 4px rgba(227, 227, 227, 0.25) rounded-[15px]">
          <div className="font-bold">Category wise sales</div>
          <div className="pt-6 flex gap-12 ">
            <div className="w-40 h-40">
              <Doughnut data={doughnutData} />
            </div>
            <div className="flex flex-col gap-2 justify-center">
              {items.map(renderPieChartItem)}
            </div>
          </div>
        </div>

        <div className="bg-white rounded-[15px] p-10">
          <div className="font-bold">Best sellers</div>
          <div className="pt-6 pb-4 flex gap-8 font-semibold">
            <div className="w-[150px]">Product</div>
            <div className="w-20">Amount</div>
            <div className="w-20">Sales</div>
            <div className="w-20">Stock</div>
            <div className="w-20">Ratings</div>
          </div>
          <div className="flex flex-col gap-2">
            {bestSellers.map(renderBestSeller)}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SellerDashboard;
