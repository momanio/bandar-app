import CloseIcon from "@mui/icons-material/Close";
import { Dialog, IconButton } from "@mui/material";

import UserSetting from "components/shared/UserSetting";

const ShowUserDialog = ({
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
          width: "88.65rem",
          height: "100%",
          maxWidth: "88.65rem",
          alignItems: "center",
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
          left: 155,
          top: 8,
          color: (theme) => theme.palette.grey[500],
          zIndex: 100,
        }}
      >
        <CloseIcon />
      </IconButton>
      <UserSetting />
    </Dialog>
  );
};
export default ShowUserDialog;
