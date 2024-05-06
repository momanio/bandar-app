import { useState } from "react";
import { Button, Dialog, IconButton } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { ReactSVG } from "react-svg";
import emailIcon from "assets/icons/email.svg";
import Radio from "@mui/material/Radio";

const CreateSubscDialog = ({
  open,
  handleClose,
  openStepTow,
}: {
  open: boolean;
  handleClose: () => void;
  openStepTow: () => void;
}) => {
  const [selectedValue, setSelectedValue] = useState("a");

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedValue(event.target.value);
  };

  return (
    <Dialog
      scroll="body"
      maxWidth="sm"
      sx={{
        "& .MuiPaper-root": {
          borderRadius: "22px",
          backgroundColor: "#111315",
          width: { xs: "90%", sm: "80%", md: "37rem" },
        },
      }}
      onClose={handleClose}
      open={open}
    >
      <IconButton
        aria-label="close"
        onClick={handleClose}
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
          <div className="flex pb-10 gap-6">
            <div className="justify-between w-full gap-2">
              <div className="flex h-14 py-3 px-5 bg-black-1000 rounded-2xl">
                <ReactSVG src={emailIcon} />
                <span className="font-normal text-black-300">
                  أدخل بريد المتدرب، ستصله بيانات تسجيل الدخول بعد الدفع.
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-center gap-3 w-full text-white">
          <Button
            onClick={openStepTow}
            variant="contained"
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
            انشاء اشتراك
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
    </Dialog>
  );
};

export default CreateSubscDialog;
