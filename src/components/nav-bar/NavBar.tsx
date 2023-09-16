import React, { FC, useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

import { NavBarProps } from "./types";
import { EmptyProfile } from "assets/icons";

const NavBar: FC<NavBarProps> = (props) => {
  const { navBarItems, title } = props;

  const [selectedTab, setSelectedTab] = useState("");

  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const currentPath = location.pathname;
    setSelectedTab(currentPath);
  }, [location.pathname]);

  const handleNavBarItemClick = (path: string) => {
    setSelectedTab(path);
    navigate(path);
  };

  return (
    <div
      className="flex fixed bottom-0 top-0 flex-col justify-between w-60 h-screen
      bgGrad border-r-2 border-gray-100"
    >
      <div className="flex flex-col mt-5">
        <div
          className="mb-6 cursor-pointer"
          onClick={() => navigate("/main-page")}
        >
          {title}
        </div>
        {navBarItems.map((navBarItem) => {
          const { icon: NavbarIcon } = navBarItem;
          return (
            <div
              key={navBarItem.path}
              className={`flex overflow-hidden relative flex-row items-center py-2 px-4
              h-12 cursor-pointer ${
                selectedTab === navBarItem.path ? "bg-primary/30" : ""
              }`}
              onClick={() => handleNavBarItemClick(navBarItem.path)}
            >
              {NavbarIcon && <NavbarIcon />}
              <span
                className="overflow-hidden ml-3 text-base font-normal text-white whitespace-nowrap
                 hover:scale-100"
              >
                {navBarItem.cta}
              </span>
            </div>
          );
        })}
      </div>
      <div className="h-24 p-4 flex items-center">
        <div className="w-full pt-4 pl-2 border-t border-white flex gap-3">
          <EmptyProfile className="w-[40px] h-[40px]" />
          <div className="flex flex-col justify-center gap-1">
            <div className="text-[#1A91A4] bg-white px-2 rounded-md text-lg font-workSans font-semibold">
              Anna
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
