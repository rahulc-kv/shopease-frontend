import React, { FC, useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

import { NavBarProps } from "./types";

const NavBar: FC<NavBarProps> = (props) => {
  const { navBarItems, title } = props;

  const [selectedTab, setSelectedTab] = useState("");

  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const currentPath = location.pathname;
    const firstPathSegment = currentPath.split("/")[1];
    setSelectedTab(`/${firstPathSegment}`);
  }, [location.pathname]);

  const handleNavBarItemClick = (path: string) => {
    setSelectedTab(path);
    navigate(path);
  };

  return (
    <div
      className="flex fixed bottom-0 flex-col justify-between w-60 h-[calc(100%-4rem)]
       bg-white border-r-2 border-gray-100"
    >
      <div className="flex flex-col mt-5">
        {title}
        {navBarItems.map((navBarItem) => {
          const { icon: NavbarIcon } = navBarItem;
          return (
            <div
              key={navBarItem.path}
              className={`flex overflow-hidden relative flex-row items-center py-2 px-4
              h-12 cursor-pointer ${
                selectedTab === navBarItem.path ? "bg-primary/10" : ""
              }`}
              onClick={() => handleNavBarItemClick(navBarItem.path)}
            >
              {NavbarIcon && <NavbarIcon />}
              <span
                className="overflow-hidden ml-3 text-base font-normal whitespace-nowrap
                 hover:scale-100"
              >
                {navBarItem.cta}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default NavBar;
