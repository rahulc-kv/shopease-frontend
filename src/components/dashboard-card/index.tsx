import { Customers, Earnings, Orders } from "assets/icons";
import React from "react";
import MetricsCard from "./dashboardCard";

export const DashboardToolbar: React.FC = () => {
  return (
    <div className="flex w-full h-28 flex-wrap gap-6 justify-start">
      <MetricsCard
        label="Total orders"
        value={36778}
        image={<Orders />}
        changePercent={5.21}
      />
      <MetricsCard
        label="Total Earnings"
        value={96778}
        image={<Earnings />}
        changePercent={-3.89}
      />
      <MetricsCard
        label="New customers"
        value={36778}
        image={<Customers />}
        changePercent={11.21}
      />
    </div>
  );
};
