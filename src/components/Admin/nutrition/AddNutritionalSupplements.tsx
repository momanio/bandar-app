import React, { useState } from "react";
import CloseIcon from "@mui/icons-material/Close";
import { Button, Dialog, IconButton } from "@mui/material";
import redSupp from "assets/icons/redSupp.svg";
import AddNutrition from "components/shared/AddNutrition";
import { ReactSVG } from "react-svg";
import fire from "assets/icons/fire.svg";
const AddNutritionalSupplements = ({
  show,
  closeHandler,
}: {
  show: boolean;
  closeHandler: () => void;
}) => {
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const model = [
    <AddNutrition
      itemType="صورة المكمل"
      label="اسم المكمل الغذائي"
      placeHolder="أدخل اسم المكمل الغذائي"
      icon={<ReactSVG src={redSupp} />}
      nextActive={() => {
        setActiveIndex(activeIndex + 1);
      }}
    />,
    <div className="flex flex-col gap-8 w-full">
      <span className="font-bold text-2xl text-black-400">
        معلومات عن بيض مسلوق
      </span>
      <div className="flex gap-5 w-full">
        <div className="flex flex-col gap-2 w-full">
          <span className="font-medium text-base text-white">فئة الغذاء</span>
          select1
        </div>
        <div className="flex flex-col gap-2 w-full">
          <span className="font-medium text-base text-white">وحدة القياس</span>
          select2
        </div>
      </div>
      <div className="flex gap-[1.125rem]">
        <div className="w-full border border-[#212426] rounded-3xl px-5 py-7 flex flex-col gap-3 items-center">
          input1
          <div className="flex gap-2">
            <ReactSVG src={fire} />
            <span className="font-medium text-base  text-black-400">
              سعرات حرارية
            </span>
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
          <span className="font-bold text-2xl text-white">
            المكملات الغذائية
          </span>
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

export default AddNutritionalSupplements;
