import CloseIcon from "@mui/icons-material/Close";
import { Button, Dialog, IconButton } from "@mui/material";
import eyeIcon from "assets/icons/eye.svg";
import UserSetting from "components/shared/UserSetting";
import { useState } from "react";
import { ReactSVG } from "react-svg";

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
          color: "#fff",
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
        PaperProps={{
          style: {
            backgroundColor: "unset",
            margin: "0",
            width: "100%",
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
        <div className="w-full">
          <UserSetting />
        </div>
      </Dialog>
    </div>
  );
};
export default ShowUserDialog;
