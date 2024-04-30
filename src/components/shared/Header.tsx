import MenuIcon from "@mui/icons-material/Menu";
import { Tab, Tabs } from "@mui/material";
import AppBar from "@mui/material/AppBar";
import Avatar from "@mui/material/Avatar";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Toolbar from "@mui/material/Toolbar";
import Tooltip from "@mui/material/Tooltip";
import Typography from "@mui/material/Typography";
import gymIcon from "assets/icons/gym.svg";
import menuIcon from "assets/icons/menu-board.svg";
import eye from "assets/icons/eye.svg";

import salladIcon from "assets/icons/salad .svg";
import usersIcon from "assets/icons/user.svg";
import logo from "assets/images/logo.png";
import * as React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
const navigation = [
  {
    path: "طلبات التسجيل",
    icon: usersIcon,
    pathToReplace: "/admin/dashboard",
  },
  {
    path: "التغذية",
    icon: usersIcon,
    pathToReplace: "/admin/dashboard/nutrition",
  },
  {
    path: "التمارين",
    icon: usersIcon,
    pathToReplace: "/admin/dashboard/training",
  },
  {
    path: "المتدربين",
    icon: usersIcon,
    pathToReplace: "/admin/dashboard/trainees",
  },
];
const Header = () => {
  const [active, setActive] = useState<string>("طلبات التسجيل");
  const navigate = useNavigate();
  return (
    <div className="px-[4.375rem] flex justify-between items-center">
      <img src={logo} alt="logo" />
      <div className="flex gap-4 pt-9">
        {navigation.map((item) => {
          return (
            <div
              onClick={() => {
                setActive(item.path);
                navigate(item.pathToReplace);
              }}
              className="flex flex-col  first:px-4 px-10"
            >
              <div className={`cursor-pointer flex items-center gap-3 pb-8`}>
                <img src={item.icon} alt="logo" />
                <span
                  className={` text-2xl font-semibold ${
                    active === item.path ? "text-red-600" : "text-black-300"
                  }`}
                >
                  {item.path}
                </span>
              </div>
              <div
                className={`border-x-0  border-b-0 border-red-600 rounded-t-2xl  ${
                  active === item.path ? "border-t-4" : undefined
                }`}
              ></div>
            </div>
          );
        })}
      </div>
      <div className="flex gap-6 items-center">
        <img src={eye} alt="eye" />
        <IconButton sx={{ p: 0 }}>
          <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
        </IconButton>
      </div>
    </div>
  );
};
export default Header;
