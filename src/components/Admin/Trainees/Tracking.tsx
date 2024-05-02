import UserInfo from "components/shared/UserInfo";
import React from "react";

const Tracking = () => {
  return (
    <div className="flex gap-[1.563rem] h-full w-full">
      <UserInfo />
      <div className="h-full w-4/5 bg-black-1000 py-10 px-[3.125rem] rounded-[1.375rem]"></div>
    </div>
  );
};

export default Tracking;
