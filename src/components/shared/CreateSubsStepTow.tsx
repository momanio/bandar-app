import { Dialog, IconButton, Button } from "@mui/material";
import { ReactSVG } from "react-svg";
import CloseIcon from "@mui/icons-material/Close";
import penIcon from "assets/icons/pen.svg";

const CreateSubsStepTow = ({
  open,
  handleClose,
}: {
  open: boolean;
  handleClose: () => void;
}) => {
  return (
    <Dialog
      PaperProps={{
        style: {
          backgroundColor: "unset",
          margin: "0",
          width: "42.688rem",
          borderRadius: "1.375rem",
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
            <span className="w-[407px] h-[39px]  font-bold text-center text-white text-2xl leading-6">
              تم انشاء اشتراك
            </span>
            <span className="flex gap-2   text-[#9ea0a5] text-lg">
              تفاصيل الاشتراك
              <ReactSVG src={penIcon} />
            </span>

            <div className="w-[20.188rem] h-7  rounded-lg border-[0.188rem] border-b-0 border-[#212426] "></div>
          </div>

          <div className="flex flex-col gap-3">
            <div className="flex gap-6">
              <div className="flex flex-col w-full gap-2 justify-center items-center">
                <span className="text-base font-normal text-black-300">
                  مدة الاشتراك
                </span>
                <div className="w-[11.188rem] py-3 px-5 bg-black-1000 rounded-2xl">
                  <span className="text-base font-normal text-black-300">
                    3 اشهر
                  </span>
                </div>
              </div>
              <div className="flex flex-col w-full gap-2 justify-center items-center">
                <span className="text-base font-normal text-black-300">
                  البريد الالكتروني
                </span>
                <div className="w-[11.188rem] py-3 px-5 bg-black-1000 rounded-2xl ">
                  <span className="text-base font-normal text-black-300">
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
                width: "100%",
                bgcolor: "#F23A3A",
                fontWeight: "700",
                color: "white",
                borderColor: "#F23A3A",
                paddingY: "1rem",
                borderRadius: "0.75rem",
                ":hover": {
                  borderColor: "#F23A3A",
                  bgcolor: "#F23A3A",
                },
              }}
            >
              ارسال بيانات الدخول لـ نائف عبدالله الديرة
            </Button>
            <Button
              onClick={handleClose}
              className="w-1/4"
              variant="outlined"
              sx={{
                borderRadius: "1rem",
                borderColor: "#50535b",
                fontWeight: "bold",
                paddingY: "1rem",
                color: "white",
                ":hover": {
                  borderColor: "#50535b",
                  bgcolor: "#50535b",
                },
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
