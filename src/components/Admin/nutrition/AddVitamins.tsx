import React, { useState } from "react";
import CloseIcon from "@mui/icons-material/Close";
import { Button, Dialog, IconButton, Radio } from "@mui/material";
import AddNutrition from "components/shared/AddNutrition";
import pill from "assets/icons/pill.svg";
import { ReactSVG } from "react-svg";

const AddVitamins = ({
  show,
  closeHandler,
}: {
  show: boolean;
  closeHandler: () => void;
}) => {
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const model = [
    <AddNutrition
      label="اسم الفيتامين"
      placeHolder="أدخل اسم الفيتامين"
      icon={<ReactSVG src={pill} />}
      nextActive={() => {
        setActiveIndex(activeIndex + 1);
      }}
    />,
    <div className="flex flex-col gap-8 w-full">
      <span className="font-bold text-2xl text-black-400">
        معلومات عن فيتامين
      </span>
      <div className="flex flex-col gap-2 w-full">
        <span className="font-medium text-base text-white">فئة الفيتامين</span>
        select1
      </div>
      <div className="flex flex-col gap-2">
        <span className="font-medium text-base text-white">وحدة القياس</span>
        <div className="flex gap-[1.125rem]">
          <div className="w-full border border-[#212426] rounded-3xl px-5 py-7 flex flex-col gap-3 items-start">
            <div className="flex gap-2 items-center">
              <Radio
                color="error"
                checked={true}
                value="b"
                style={{
                  width: "1.5rem",
                  height: "1.5rem",
                }}
              />
              <span className="font-medium text-base  text-black-400">حبة</span>
            </div>
          </div>
          <div className="w-full border border-[#212426] rounded-3xl px-5 py-7 flex flex-col gap-3 items-start">
            <div className="flex gap-2 items-center">
              <Radio
                color="error"
                checked={true}
                value="b"
                style={{
                  width: "1.5rem",
                  height: "1.5rem",
                }}
              />
              <span className="font-medium text-base  text-black-400">
                جرام
              </span>
            </div>
          </div>
        </div>
      </div>

      <Button
        onClick={() => {}}
        sx={{
          width: "100%",
          bgcolor: "#F23A3A",
          borderRadius: "1rem",
          paddingY: "0.906rem",
          color: "#FFFFFF",
          ":hover": {
            bgcolor: "#F23A3A",
          },
        }}
      >
        انشاء
      </Button>
    </div>,
  ];
  return (
    <Dialog
      open={show}
      PaperProps={{
        style: {
          backgroundColor: "unset",
          margin: "0",
          width: "42.688rem",
        },
      }}
    >
      <IconButton
        aria-label="close"
        onClick={closeHandler}
        sx={{
          position: "absolute",
          left: 20,
          top: 16,
          color: (theme) => theme.palette.grey[500],
        }}
      >
        <CloseIcon />
      </IconButton>
      <div className="px-10 py-[1.875rem] bg-black-1000 rounded-[1.375rem] flex flex-col gap-[1.688rem] items-center w-full">
        <div className="flex flex-col gap-2 items-center w-full">
          <span className="font-bold text-2xl text-white">إضافة فيتامين</span>
          <div className="px-7 py-2 border border-[#333638] rounded-2xl w-fit">
            <span className="font-bold text-sm text-white">
              2/{activeIndex + 1}
            </span>
          </div>
        </div>
        {model[activeIndex]}
      </div>
    </Dialog>
  );
};

export default AddVitamins;
