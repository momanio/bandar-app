import { Button, Dialog, IconButton } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { ReactSVG } from "react-svg";
import activateIcon from "assets/icons/ActivateIcon.svg";

const ActivateDialog = ({
  title,
  subTitle,
  open,
  handleClose,
}: {
  title: string;
  subTitle: string;
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
        <div className="flex flex-col gap-8 p-9 w-full bg-[#111315] item-center justify-center">
          <div className="flex flex-col items-center justify-center w-full">
            <ReactSVG src={activateIcon} />
          </div>
          <div className="flex flex-col items-center gap-4 w-full text-white">
            <span
              className="flex-grow-0 font-bold text-center text-white text-2xl leading-6"
              style={{ width: "80%", maxWidth: "25rem" }}
            >
              {title}
            </span>
            <span
              className="flex-grow-0 text-center text-[#9ea0a5] text-lg leading-6"
              style={{ width: "80%", maxWidth: "25rem" }}
            >
              {subTitle}
            </span>
          </div>
          <div className="flex gap-3 w-full text-white">
            <Button
              className="w-full md:w-96"
              variant="contained"
              sx={{
                bgcolor: "#83bf6e",
                fontWeight: "700",
                color: "white",
                borderColor: "#83bf6e",
                paddingY: "1rem",
                borderRadius: "0.75rem",
                ":hover": {
                  borderColor: "#83bf6e",
                  bgcolor: "#83bf6e",
                },
              }}
            >
              نعم، تفعيل
            </Button>
            <Button
              onClick={handleClose}
              className="w-full md:w-96"
              variant="outlined"
              sx={{
                paddingY: "1rem",
                borderRadius: "16px",
                borderColor: "#50535b",
                fontWeight: "bold",
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
export default ActivateDialog;
