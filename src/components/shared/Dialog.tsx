import {
  Avatar,
  Button,
  Dialog,
  DialogTitle,
  IconButton,
  List,
  ListItem,
  ListItemAvatar,
  ListItemButton,
  ListItemText,
} from "@mui/material";
import { blue } from "@mui/material/colors";
import React from "react";
import CloseIcon from "@mui/icons-material/Close";
const Dialogt1 = () => {
  return (
    <Dialog
      onClose={() => {}}
      open={false}
      sx={{
        bgcolor: "#333638",
        opacity: "0.5",
      }}
    >
      <div className="">
        <IconButton
          aria-label="close"
          onClick={() => {}}
          sx={{
            position: "absolute",
            left: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          <CloseIcon />
        </IconButton>
        <div className="flex flex-col gap-8 p-9 w-[30.75rem] bg-[#111315] item-center justify-center">
          <div className="w-full">image</div>
          <div className="flex flex-col gap-4 w-full">
            <span>dsfsafdf</span>
            <span>dsfsafdf</span>
          </div>
          <div className="flex gap-3 w-full">
            <Button className="w-1/2" variant="contained">
              DDD
            </Button>
            <Button className="w-1/2" variant="contained" color="error">
              DDDDDD
            </Button>
          </div>
        </div>
      </div>
    </Dialog>
  );
};

export default Dialogt1;
