import { Avatar, Button, IconButton } from "@mui/material";
import addIcon from "assets/icons/addIcon.svg";
import Option from "components/shared/Option";
import { ReactSVG } from "react-svg";
import salladIcon from "assets/icons/salad .svg";
import usersIcon from "assets/icons/user.svg";
import gymIcon from "assets/icons/gym.svg";
import searchIcon from "assets/icons/search-status.svg";
import { useNavigate } from "react-router-dom";
const UserInfo = () => {
  const navigate = useNavigate();

  const settingMenu = [
    {
      id: 1,
      icon: usersIcon,
      text: "نبذة عن المتدرب",
      path: "/admin/dashboard/trainee-setting",
      handler: () => {
        navigate(`/admin/dashboard/trainee-setting/:${25}`);
      },
    },
    {
      id: 2,
      icon: salladIcon,
      text: "البرنامج الغذائي",
      path: "/admin/dashboard/nutritional-program",
      handler: () => {
        navigate(`/admin/dashboard/nutritional-program/:${25}`);
      },
    },
    {
      id: 3,
      icon: gymIcon,
      text: "برنامج التمارين",
      path: "/admin/dashboard/exercise-program",
      handler: () => {
        navigate(`/admin/dashboard/exercise-program/:${25}`);
      },
    },
    {
      id: 4,
      icon: searchIcon,
      text: "متابعة",
      path: "/admin/dashboard/tracking",
      handler: () => {
        navigate(`/admin/dashboard/tracking/:${25}`);
      },
    },
  ];
  return (
    <div className="bg-black-1000 w-1/5 px-3.5 pt-7 pb-3.5 rounded-[1.375rem] h-fit flex flex-col gap-10">
      <div className="flex flex-col  gap-5 items-center">
        <IconButton sx={{ p: 0 }}>
          <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
        </IconButton>
        <div className="flex flex-col gap-3">
          <span className="font-bold text-2xl text-white">
            نائف عبدالله الديرة
          </span>
          <div className="flex flex-col gap-3 px-4 py-3 items-center bg-red-950 rounded-2xl">
            <span className="font-bold text-base text-red-400">
              اشتراك منتهي
            </span>
            <Button
              onClick={() => {}}
              variant="contained"
              sx={{
                bgcolor: "#F23A3A",
                fontWeight: "700",
                color: "white",
                borderColor: "#F23A3A",
                gap: "0.75rem",
                paddingX: "0.75rem",
                paddingY: "0.375rem",
                borderRadius: "0.75rem",
                alignItems: "center",
                ":hover": {
                  borderColor: "#F23A3A",
                  bgcolor: "#F23A3A",
                },
              }}
            >
              <ReactSVG src={addIcon} />
              تجديد الاشتراك
            </Button>
          </div>
        </div>
        <div className="flex flex-col gap-4 w-full">
          {settingMenu.map((item) => {
            return (
              <Option
                handler={item.handler}
                id={item.id}
                text={item.text}
                icon={item.icon}
                path={item.path}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default UserInfo;
