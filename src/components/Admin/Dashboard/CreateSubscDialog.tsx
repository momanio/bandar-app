import { useState } from "react";
import { Button, Dialog, IconButton } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { ReactSVG } from "react-svg";
import addIcon from "assets/icons/addIcon.svg";
import RectangleIcon from "assets/icons/Rectangle201.svg";
import Radio from "@mui/material/Radio";
const ChildModal = () => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button
        className="w-3/4"
        onClick={handleOpen}
        variant="contained"
        sx={{
          bgcolor: "#F23A3A",
          fontWeight: "700",
          color: "white",
          width: "30rem",
          borderColor: "#F23A3A",
          gap: "0.75rem",
          paddingX: "0.75rem",
          paddingY: "0.375rem",
          borderRadius: "0.75rem",
          alignItems: "center",
          ":hover": {
            borderColor: "#F23A3A",
            bgcolor: "#F23A3A",
          },
        }}
      >
        انشاء اشتراك
      </Button>
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
    </div>
  );
};

const CreateSubscDialog = () => {
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  const [selectedValue, setSelectedValue] = useState("a");

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedValue(event.target.value);
  };

  return (
    <div>
      <Button
        onClick={handleClickOpen}
        variant="contained"
        sx={{
          bgcolor: "#F23A3A",
          fontWeight: "700",
          color: "white",
          borderColor: "#F23A3A",
          gap: "0.75rem",
          paddingX: "0.75rem",
          paddingY: "0.375rem",
          borderRadius: "0.75rem",
          alignItems: "center",
          ":hover": {
            borderColor: "#F23A3A",
            bgcolor: "#F23A3A",
          },
        }}
      >
        <ReactSVG src={addIcon} />
        انشاء اشتراك
      </Button>
      <Dialog
        scroll="body"
        maxWidth="sm"
        sx={{
          "& .MuiPaper-root": {
            borderRadius: "22px",
            backgroundColor: "#111315",
          },
        }}
        onClose={handleClose}
        open={open}
      >
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
        <div className="gap-8 px-10 py-10   bg-[#111315]  item-center justify-center">
          <div className="flex flex-col items-center gap-4 w-full text-white">
            <span className="w-[25rem] h-10 flex-grow-0 font-bold text-center text-white text-2xl leading-6">
              انشاء اشتراك
            </span>
          </div>
          <div className="flex flex-col gap-3">
            <span className="text-right font-normal text-white">
              اختار مدة الاشتراك
            </span>
            <div className="flex gap-6">
              <div className="flex flex-col w-full gap-2">
                <div className="overflow-y-auto h-[7.5rem] py-3 px-5 bg-black-1000 rounded-2xl">
                  <span className="text-right font-normal text-white">
                    اشتراك شهر
                  </span>
                  <Radio
                    color="error"
                    checked={selectedValue === "a"}
                    onChange={handleChange}
                    value="a"
                    name="radio-buttons"
                    inputProps={{ "aria-label": "A" }}
                  />
                </div>
              </div>
              <div className="flex flex-col w-full gap-2">
                <div className="overflow-y-auto h-[7.5rem] py-3 px-5 bg-black-1000 rounded-2xl ">
                  <span className="text-right font-normal text-white">
                    اشتراك 3 اشهر
                  </span>
                  <Radio
                    color="error"
                    checked={selectedValue === "b"}
                    onChange={handleChange}
                    value="b"
                    name="radio-buttons"
                    inputProps={{ "aria-label": "B" }}
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-3 text-right">
            <span className="text-right font-normal text-white">
              البريد الالكتروني
            </span>
            <div className="flex gap-6">
              <div className="flex flex-col w-full gap-2">
                <div className="overflow-y-auto h-14 py-3 px-5 bg-black-1000 rounded-2xl">
                  <span className="font-normal text-black-300">
                    {" "}
                    أدخل بريد المتدرب، ستصله بيانات تسجيل الدخول بعد الدفع.
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="flex justify-center gap-3 w-full text-white">
            <ChildModal />
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
      </Dialog>
    </div>
  );
};

export default CreateSubscDialog;
