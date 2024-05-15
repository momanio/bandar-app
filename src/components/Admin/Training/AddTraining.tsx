import CloseIcon from "@mui/icons-material/Close";
import redDumble from "assets/icons/redDumble.svg";
import video from "assets/icons/video.svg";

import { useState } from "react";
import { Button, Dialog, IconButton, Radio } from "@mui/material";
import AddNutrition from "components/shared/AddNutrition";
import { ReactSVG } from "react-svg";
import Divider from "@mui/material/Divider";
import InputText from "components/shared/InputText";
const AddTraining = ({
  show,
  closeHandler,
}: {
  show: boolean;
  closeHandler: () => void;
}) => {
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const model = [
    <AddNutrition
      itemType="الصورة التوضيحية للتمرين"
      label="اسم التمرين"
      placeHolder="أدخل اسم التمرين"
      icon={<ReactSVG src={redDumble} />}
      nextActive={() => {
        setActiveIndex(activeIndex + 1);
      }}
      supportType={true}
    />,
    <div className="flex flex-col gap-8 w-full">
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
            <span className="font-medium text-base  text-black-400">
              رابط فيديو التمرين
            </span>
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
              رفع فيديو التمرين
            </span>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-3 w-full">
        <span className="text-base font-medium text-white">رابط الفيديو</span>
        {true ? (
          <InputText
            onChange={() => {}}
            type="text"
            value={"dd"}
            placeHolder={"ادخل رابط الفيديو من vimeo"}
            icon={
              <div className="flex items-center justify-center ps-3">
                <ReactSVG src={video} />
              </div>
            }
          />
        ) : (
          <InputText
            onChange={() => {}}
            type="text"
            value={"dd"}
            placeHolder={"ادخل رابط الفيديو من vimeo"}
            icon={
              <div className="flex gap-4 items-center justify-center bg-black-1000 px-3 rounded-s-[1.25rem] my-[0.1rem] ms-[0.1rem]">
                <ReactSVG src={video} />
                <span className="text-black-400 font-normal text-base whitespace-nowrap">
                  اختيار ملف
                </span>
              </div>
            }
          />
        )}
      </div>

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

export default AddTraining;
