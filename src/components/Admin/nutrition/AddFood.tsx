import CloseIcon from "@mui/icons-material/Close";
import redSalad from "assets/icons/redSalad.svg";
import { useState } from "react";
import { Button, Dialog, IconButton } from "@mui/material";
import AddNutrition from "components/shared/AddNutrition";
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
      label="اسم الصنف الغذائي"
      placeHolder="أدخل اسم الصنف"
      icon={<ReactSVG src={redSalad} />}
      nextActive={() => {
        setActiveIndex(activeIndex + 1);
      }}
    />,
    <div>
      <div className="w-96 py-5 text-[#9ea0a5] text-2xl">
        <span>معلومات عن بيض مسلوق</span>
      </div>
      <div className="flex py-10 gap-[3rem]">
        <span className="text-base font-normal text-white">اسم فئة الغداء</span>
        <div className="flex gap-4 px-3.5 py-3 rounded-2xl bg-[#111315]">
          <ReactSVG src={redSalad} />
          <span className="text-base font-normal text-white">
            اسم فئة الغداء
          </span>
        </div>
        <span className="text-base font-normal text-white">اسم فئة الغداء</span>
        <div className="flex gap-4 px-3.5 py-3 rounded-2xl bg-[#111315]">
          <ReactSVG src={redSalad} />
          <span className="text-base font-normal text-white">
            اسم وحدة القياس
          </span>
        </div>
      </div>

      <div className="flex flex-col py-5 gap-3 w-auto">
        <div className="flex gap-3 items-center justify-center">
          <div className="w-48 px-7 py-3 rounded-2xl border border-black-700 flex flex-col items-center justify-center">
            <span className="font-bold text-white">0</span>
            <span className="w-20 h-6 text-sm font-medium text-right text-[#9ea0a5]">
              سعرات حرارية
            </span>
          </div>
          <div className="w-48 px-7 py-3 rounded-2xl border border-black-700 flex flex-col items-center justify-center">
            <span className="font-bold text-white">0</span>
            <span className="w-20 h-6 text-sm font-medium text-right text-[#9ea0a5]">
              كربوهيدرات
            </span>
          </div>
          <div className="w-48 px-7 py-3 rounded-2xl border border-black-700 flex flex-col items-center justify-center">
            <span className="font-bold text-white">0</span>

            <span className="w-20 h-6 text-sm font-medium text-right text-[#9ea0a5]">
              بروتين
            </span>
          </div>
        </div>
      </div>

      <Button
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
