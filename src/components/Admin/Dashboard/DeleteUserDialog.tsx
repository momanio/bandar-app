import { useState } from "react";
import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import { ReactSVG } from "react-svg";
import trashIcon from "assets/icons/trashIcon.svg";
import vectorIcon from "assets/icons/Vector.svg";
const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  "& .MuiDialogContent-root": {
    padding: theme.spacing(1),
  },
  "& .MuiDialogActions-root": {
    padding: theme.spacing(1),
  },
  "& .MuiPaper-root": {
    width: "492px",
    height: "375px",
    color: "white",
    padding: "16px 37px 38px 20px",
    borderRadius: "22px",
    backgroundColor: "#1a1d1f",
  },
}));

const DeleteUserDialog = () => {
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <IconButton onClick={handleClickOpen} aria-label="delete">
        <ReactSVG src={trashIcon} />
      </IconButton>
      <BootstrapDialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
      >
        <DialogTitle sx={{ display: "flex", justifyContent: "center" }}>
          <ReactSVG src={vectorIcon} />
        </DialogTitle>
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
        <DialogContent dividers>
          <div className="w-[407px] h-[39px] flex-grow-0 font-['IBMPlexSansArabic'] text-24px font-bold leading-6 text-center text-white">
            حذف طلب التسجيل
          </div>
          <div className="w-[407px] h-[39px] flex-grow-0 font-['IBMPlexSansArabic'] text-18px font-normal leading-6 text-center text-[#9ea0a5]">
            عند حذفك لهذا الطلب لن تتمكن من استرجاعه
          </div>
        </DialogContent>
        <DialogActions
          sx={{
            width: "417px",
            height: "56px",
            display: "flex",
            flexDirection: "row",
            alignItems: "flex-start",
            gap: "12px",
            margin: "52px 0 0 18px",
            padding: "0",
            justifyContent: "center",
          }}
        >
          <Button
            sx={{
              width: "206px",
              height: "56px",
              flexGrow: 0,
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center",
              gap: "8px",
              padding: "13px 40px 16px",
              borderRadius: "16px",
              bgcolor: "#f23a3a",
              fontWeight: "700",
              color: "white",
            }}
            variant="contained"
            size="large"
          >
            حذف
          </Button>
          <Button
            sx={{
              width: "206px",
              height: "56px",
              flexGrow: 0,
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center",
              gap: "8px",
              padding: "13px 40px 16px",
              borderRadius: "16px",
              bgcolor: "#50535b",
              fontWeight: "700",
              color: "white",
            }}
            autoFocus
            onClick={handleClose}
            variant="outlined"
            size="large"
          >
            إلغاء
          </Button>
        </DialogActions>
      </BootstrapDialog>
    </div>
  );
};
export default DeleteUserDialog;
