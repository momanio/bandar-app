import { Dialog, IconButton, Button } from "@mui/material";

import { ReactSVG } from "react-svg";
import CloseIcon from "@mui/icons-material/Close";
import RectangleIcon from "assets/icons/Rectangle201.svg";

const CreateSubsStepTow = ({
  open,
  openStepTow,
  handleClose,
}: {
  open: boolean;
  openStepTow: () => void;
  handleClose: () => void;
}) => {
  return (
    <Dialog
      sx={{
        "& .MuiPaper-root": {
          borderRadius: "22px",
          backgroundColor: "#111315",
        },
      }}
      onClose={handleClose}
      open={open}
    >
      <div>
        <IconButton
          aria-label="close"
          onClick={() => {
            handleClose();
          }}
          sx={{
            position: "absolute",
            left: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          <CloseIcon />
        </IconButton>
        <div className="flex flex-col gap-8 p-8 w-[37rem] bg-[#111315]  item-center justify-center">
          <div className="flex flex-col items-center gap-4 w-full text-white">
            <span className="w-[407px] h-[39px] flex-grow-0 font-bold text-center text-white text-2xl leading-6">
              تم انشاء اشتراك
            </span>
            <span className="w-[25rem] h-10 flex-grow-0 text-center text-[#9ea0a5] text-lg leading-6">
              تفاصيل الاشتراك
            </span>
            <div className="flex flex-col items-center justify-center w-full">
              <ReactSVG src={RectangleIcon} />
            </div>
          </div>

          <div className="flex flex-col gap-2">
            <div className="flex gap-6">
              <div className="flex flex-col w-full gap-2">
                <span className="text-base font-normal text-black-300">
                  مدة الاشتراك
                </span>
                <div className="w-44-  px-7 py-3 rounded-2xl   bg-black-1000">
                  <span className=" font-normal text-white">3 اشهر</span>
                </div>
              </div>
              <div className="flex flex-col w-full gap-2">
                <span className="text-base font-normal text-black-300">
                  البريد الالكتروني
                </span>
                <div className="w-44-  px-7 py-3 rounded-2xl   bg-black-1000">
                  <span className="text-base font-normal text-white">
                    naif.a@gmail.com
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div className="flex justify-center gap-3 w-full text-white">
            <Button
              className="w-3/4"
              variant="contained"
              color="error"
              sx={{
                borderRadius: "16px",
                fontWeight: "bold",
                color: "white",
              }}
            >
              ارسال بيانات الدخول لـ نائف عبدالله الديرة
            </Button>
            <Button
              onClick={handleClose}
              className="w-1/4"
              variant="outlined"
              sx={{
                borderRadius: "16px",
                borderColor: "#50535b",
                fontWeight: "bold",
                color: "white",
              }}
            >
              إلغاء
            </Button>
          </div>
        </div>
      </div>
    </Dialog>
  );
};

export default CreateSubsStepTow;
