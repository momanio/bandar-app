import CloseIcon from "@mui/icons-material/Close";
import redSalad from "assets/icons/redSalad.svg";
import { useState } from "react";
import { Dialog, IconButton } from "@mui/material";
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
    <div>second model</div>,
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
