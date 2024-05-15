import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { isLoggedIn } from "services/Admin/authService";

export const AuthLayout = ({ children }: { children: React.ReactNode }) => {
  const navigate = useNavigate();
  useEffect(() => {
    if (!isLoggedIn()) {
      navigate("/");
    }
  }, [navigate]);
  return (
    <>
      <div className="bg-black-950 h-full relative overflow-hidden overflow-y-auto">
        <div className="w-[395.6px] h-[545.1px] transform rotate-[30deg] bg-[#f23a3a] blur-[250px] absolute left-[-100px] "></div>
        <div className="w-[395.6px] h-[545.1px] transform rotate-[30deg] bg-[#f23a3a] blur-[250px] absolute top-1/2 left-1/2  -translate-x-1/2 -translate-y-1/2"></div>

        <div className="w-[1300px] xl:w-[1655.83px] md:w-[1590px]  h-[270px] absolute flex flex-col-reverse gap-6 rotate-[-150deg] top-[130px] right-1/2">
          <div className="h-[24.07px] bg-[#ffffff1c]"></div>
          <div className="h-[36.55px] bg-[#ffffff1c]"></div>
          <div className="h-[34.77px] bg-[#ffffff1c]"></div>
          <div className="h-[24.07px] bg-[#ffffff1c]"></div>
          <div className="h-[36.55px] bg-[#ffffff1c]"></div>
        </div>
        <div className="flex items-center justify-between flex-col h-full w-full">
          {children}
        </div>
      </div>
    </>
  );
};
