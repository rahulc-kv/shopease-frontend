import React from "react";
import { Line } from "react-chartjs-2";
import {
  CategoryScale,
  Chart as ChartJS,
  Filler,
  LinearScale,
  LineElement,
  PointElement,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend
);

const RevenueChart: React.FC = () => {
  const chartData = {
    labels: ["January", "February", "March", "April", "May"],
    datasets: [
      {
        label: "Order Statistics",
        data: [10, 20, 15, 30, 25],
        borderColor: "rgb(75, 192, 192)",
        fill: false,
      },
      {
        label: "Earnings",
        data: [200, 300, 250, 400, 350],
        borderColor: "rgb(255, 99, 132)",
        fill: false,
      },
      {
        label: "Product Statistics",
        data: [50, 60, 45, 70, 55],
        borderColor: "rgb(54, 162, 235)",
        fill: false,
      },
    ],
  };

  const chartOptions = {
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: true,
        labels: {
          boxWidth: 2,
          boxHeight: 2,
        },
      },
    },
    scales: {
      y: {
        beginAtZero: true,
        grid: {
          display: false,
        },
      },
      x: {
        grid: {
          display: false,
        },
      },
    },
  };

  return (
    <>
      <div className="w-full h-[400px] pt-8 px-8">
        <Line data={chartData} options={chartOptions} />
      </div>
      <div className="bg-gray-100 w-full py-2 px-40 flex gap-3 justify-between mt-5 border border-[#DDD]">
        <div className="flex flex-col">
          <div>56,012</div>
          <div>Orders</div>
        </div>
        <div className="flex flex-col">
          <div>₹ 2,47,901</div>
          <div>Earnings</div>
        </div>
        <div className="flex flex-col">
          <div>56,012</div>
          <div>Products</div>
        </div>
      </div>
    </>
  );
};

export default RevenueChart;
