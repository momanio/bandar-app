import * as React from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import eyeIcon from "assets/icons/eye.svg";
import { Button } from "@mui/material";
const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "800px",
  height: "834px",
  padding: "16px 40px 37px 20px",
  color: "white",
  borderRadius: "22px",
  backgroundColor: "#1a1d1f",
};

const ShowUserDialog = () => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div className="h-full flex flex-col gap-[3.125rem]">
      <Button
        onClick={handleOpen}
        color="success"
        variant="text"
        size="small"
        startIcon={<img src={eyeIcon} alt="plus" />}
        sx={{
          fontWeight: "500",
          color: "white",
        }}
      >
        عرض
      </Button>
      <Modal keepMounted open={open} onClose={handleClose}>
        <Box sx={style}>
          <div className="w-31 h-6 py-14 px-10 flex-grow-0  text-right text-white font-bold text-lg leading-6">
            معلومات شخصية
          </div>
          <div className="w-full h-11 px-10 flex-grow-0 flex flex-row font-bold justify-between items-center">
            <div className="w-30 h-11 gap-2.5 p-2.5 rounded-2xl border-2 border-[#333638]">
              25 سنة
            </div>
            <div className="w-30 h-11 gap-2.5 p-2.5 rounded-2xl border-2 border-[#333638]">
              170 سم
            </div>
            <div className="w-30 h-11 gap-2.5 p-2.5 rounded-2xl border-2 border-[#333638]">
              64 كجم
            </div>
            <div className="w-30 h-11 gap-2.5 p-2.5 rounded-2xl border-2 border-[#333638]">
              نشاط عالي
            </div>
          </div>
        </Box>
      </Modal>
    </div>
  );
};
export default ShowUserDialog;
