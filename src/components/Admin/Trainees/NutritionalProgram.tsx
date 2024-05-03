import { DaysHolder } from "UI/Admin/DaysHolder";
import UserInfo from "components/shared/UserInfo";
import React from "react";
import DayCard from "./DayCard";

const NutritionalProgram = () => {
  return (
    <div className="flex gap-[1.563rem] h-full w-full">
      <UserInfo />
      <DaysHolder>
        <DayCard />
        <DayCard />
        <DayCard />
        <DayCard />
        <DayCard />
        <DayCard />
        <DayCard />
        <DayCard />
      </DaysHolder>
    </div>
  );
};

export default NutritionalProgram;
