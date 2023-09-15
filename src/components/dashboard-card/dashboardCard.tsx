import { GreenArrow, RedArrow } from "assets/icons";
import React from "react";

interface MetricsCardProps {
  label: string;
  value: number;
  image: any;
  changePercent?: number | null;
}

const MetricsCard: React.FC<MetricsCardProps> = ({
  label,
  value,
  image,
  changePercent = null,
}) => (
  <div className="relative flex w-[25%] min-w-300px items-center gap-3 rounded-xl bg-white p-4 shadow-[0px 4px 4px rgba(227, 227, 227, 0.25)">
    {image}
    <div className="flex flex-col gap-1 w-full">
      <div className="flex items-center text-13px gap-2">
        {label}
        {changePercent < 0 ? <RedArrow /> : <GreenArrow />}
      </div>
      <div className="flex items-baseline gap-0.5 justify-between">
        <div className="text-22px font-bold">{value}</div>
        {changePercent !== null && (
          <>
            <div
              className={`text-13px ${
                changePercent >= 0 ? "text-[#52D273]" : "text-[#EE486C]"
              }`}
            >{`${changePercent >= 0 ? "+" : ""}${changePercent}%`}</div>
          </>
        )}
      </div>
    </div>
  </div>
);
export default MetricsCard;
