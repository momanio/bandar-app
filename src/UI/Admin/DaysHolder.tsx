import { Button } from "@mui/material";
import React, { useState } from "react";
import { ReactSVG } from "react-svg";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
export const DaysHolder = ({ children }: { children: React.ReactNode }) => {
  const [counter, setCounter] = useState<number>(0);
  const weeks = [
    "الأسبوع الأول",
    "الأسبوع الثاني ",
    "الأسبوع الثالث",
    "الأسبوع الرابع",
  ];
  return (
    <div className="h-full w-4/5 bg-black-1000 py-[2.375rem] px-[3.125rem] rounded-[1.375rem] ">
      <div className="flex flex-col gap-9 h-full">
        <span className="text-[2.625rem] font-bold  text-white ">
          {weeks[counter]}
        </span>
        <div className="h-full flex flex-wrap gap-5 overflow-y-scroll">
          {children}
        </div>
        <div className="px-[1.125rem] py-2.5 flex gap-4 border border-black-700 rounded-2xl w-fit self-center items-center">
          <Button
            onClick={() => {
              if (counter === 0) {
                return;
              }
              setCounter(counter - 1);
            }}
            sx={{
              bgcolor: counter === 0 ? "#333638" : "#FFFFFF",
              borderColor: "#333638",
              padding: "0.375rem",
              minWidth: "2rem",
              borderRadius: "0.375rem",
              alignItems: "center",
              ":hover": {
                borderColor: "#333638",
                bgcolor: "#333638",
              },
            }}
          >
            <ArrowForwardIosIcon color="action" />
          </Button>
          <span className="font-bold text-lg text-white">
            الأسبوع {counter + 1} - من 4
          </span>
          <Button
            onClick={() => {
              if (counter === 3) {
                return;
              }
              setCounter(counter + 1);
            }}
            sx={{
              bgcolor: counter === 3 ? "#333638" : "#FFFFFF",
              borderColor: "#FFFFFF",
              padding: "0.375rem",
              minWidth: "2rem",
              borderRadius: "0.375rem",
              alignItems: "center",
              ":hover": {
                borderColor: "#FFFFFF",
                bgcolor: "#FFFFFF",
              },
            }}
          >
            <ArrowBackIosNewIcon color="action" />
          </Button>
        </div>
      </div>
    </div>
  );
};
