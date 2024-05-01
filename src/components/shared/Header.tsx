import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { Button } from "@mui/material";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import notification from "assets/icons/Union.svg";
import gymIcon from "assets/icons/gym.svg";
import menuIcon from "assets/icons/menu-board.svg";
import salladIcon from "assets/icons/salad .svg";
import usersIcon from "assets/icons/user.svg";
import logo from "assets/images/logo.png";
import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { ReactSVG } from "react-svg";
import { isLoggedIn } from "services/Admin/authService";
import { isAdmin } from "utils/Admin/isAdmin";
const navigation = [
  {
    path: "طلبات التسجيل",
    icon: menuIcon,
    pathToReplace: "/admin/dashboard",
  },
  {
    path: "التغذية",
    icon: salladIcon,
    pathToReplace: "/admin/dashboard/nutrition",
  },
  {
    path: "التمارين",
    icon: gymIcon,
    pathToReplace: "/admin/dashboard/training",
  },
  {
    path: "المتدربين",
    icon: usersIcon,
    pathToReplace: "/admin/dashboard/trainees",
  },
];
const Header = () => {
  const location = useLocation();
  const [active, setActive] = useState<string>(location.pathname);
  const [menu, setmMenu] = useState(false);
  const navigate = useNavigate();
  return (
    <div className="px-5 py-5 xl:py-0  xl:px-[4.375rem] flex justify-between items-center bg-black-1000">
      <img src={logo} alt="logo" />
      {isAdmin() && isLoggedIn() && (
        <>
          <div className=" gap-4 pt-9 xl:flex hidden">
            {navigation.map((item) => {
              return (
                <div
                  onClick={() => {
                    setActive(item.pathToReplace);
                    navigate(item.pathToReplace);
                  }}
                  className="flex flex-col  first:px-4 px-10"
                >
                  <div
                    className={`cursor-pointer flex items-center gap-3 pb-8`}
                  >
                    <ReactSVG
                      src={item.icon}
                      className={
                        active === item.pathToReplace ? "header-icon" : ""
                      }
                    />
                    <span
                      className={` text-base font-bold ${
                        active === item.pathToReplace
                          ? "text-red-600"
                          : "text-black-400"
                      }`}
                    >
                      {item.path}
                    </span>
                  </div>
                  <div
                    className={`header-border bg-red-600 border-x-0  border-b-0 border-red-600 rounded-t-2xl  ${
                      active === item.pathToReplace ? "border-t-4" : undefined
                    }`}
                  ></div>
                </div>
              );
            })}
          </div>
          <div className=" gap-6 items-center xl:flex hidden">
            <img src={notification} alt="eye" />
            <IconButton sx={{ p: 0 }}>
              <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
            </IconButton>
          </div>
        </>
      )}
      {!isAdmin() && isLoggedIn() && (
        <div className="relative">
          <Button
            onClick={() => {
              setmMenu(!menu);
            }}
            variant="outlined"
            sx={{
              color: "white",
              borderColor: "#F23A3A",
              gap: "0.625rem",
              paddingY: "0.625rem",
              paddingX: "0.75rem",
              flexDirection: "row-reverse",
              borderRadius: "1rem",
              ":hover": {
                borderColor: "#F23A3A",
              },
            }}
          >
            <KeyboardArrowDownIcon
              className={`downArrow ${menu && "upArrow"}`}
            />
            <span className="font-bold text-base">نائف عبدالله</span>
          </Button>
          {menu && (
            <div className="absolute  pt-[1.2rem] left-[0.1rem] ">
              <div className=" flex flex-col bg-[#333638] rounded-xl">
                <div className="flex gap-2 items-center cursor-pointer px-4 py-2 hover:bg-black-800">
                  <ReactSVG src={usersIcon} />
                  <span className="font-bold text-base text-white whitespace-nowrap ">
                    رفع تقرير المتابعة
                  </span>
                </div>
                <div className="flex gap-2 items-center cursor-pointer px-4 py-2 hover:bg-black-800">
                  <ReactSVG src={usersIcon} />
                  <span className="font-bold text-base text-red-600">
                    تسجيل الخروح
                  </span>
                </div>
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
};
export default Header;
