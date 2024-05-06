import CloseIcon from "@mui/icons-material/Close";
import redSalad from "assets/icons/redSalad.svg";
import { useState } from "react";
import { Button, Dialog, IconButton } from "@mui/material";
import AddNutrition from "components/shared/AddNutrition";
import boart from "assets/icons/boart.svg";
import protein from "assets/icons/protein.svg";
import fire from "assets/icons/fire.svg";
import { ReactSVG } from "react-svg";
const AddFood = ({
  show,
  closeHandler,
}: {
  show: boolean;
  closeHandler: () => void;
}) => {
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const model = [
    <AddNutrition
      itemType="صورة الصنف"
      label="اسم الصنف الغذائي"
      placeHolder="أدخل اسم الصنف"
      icon={<ReactSVG src={redSalad} />}
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
        <div className="w-1/3 border border-[#212426] rounded-3xl px-5 py-7 flex flex-col gap-3 items-center">
          input1
          <div className="flex gap-2">
            <ReactSVG src={fire} />
            <span className="font-medium text-base  text-black-400">
              سعرات حرارية
            </span>
          </div>
        </div>
        <div className="w-1/3 border border-[#212426] rounded-3xl px-5 py-7 flex flex-col gap-3 items-center">
          input2
          <div className="flex gap-2">
            <ReactSVG src={boart} />
            <span className="font-medium text-base  text-black-400">
              كربوهيدرات
            </span>
          </div>
        </div>
        <div className="w-1/3 border border-[#212426] rounded-3xl px-5 py-7 flex flex-col gap-3 items-center">
          input3
          <div className="flex gap-2">
            <ReactSVG src={protein} />
            <span className="font-medium text-base  text-black-400">
              بروتين
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
        onClick={() => {
          setActiveIndex(0);
          closeHandler();
        }}
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
          <span className="font-bold text-2xl text-white">إضافة صنف غذائي</span>
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

export default AddFood;
