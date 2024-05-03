import { useState } from "react";
import { Button, Dialog, IconButton } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { ReactSVG } from "react-svg";
import eyeIcon from "assets/icons/eye.svg";

const ShowUserDialog = () => {
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button
        onClick={handleClickOpen}
        sx={{
          bgcolor: "#333638",
          borderColor: "#333638",
          display: "flex",
          padding: "0.375rem",
          minWidth: "2rem",
          borderRadius: "0.75rem",
          alignItems: "center",
          ":hover": {
            borderColor: "#333638",
            bgcolor: "#333638",
          },
        }}
      >
        <ReactSVG src={eyeIcon} />
        عرض
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
        <div className="flex flex-col gap-8 p-9 w-[35rem] bg-[#111315]  item-center justify-center"></div>
      </Dialog>
    </div>
  );
};
export default ShowUserDialog;
